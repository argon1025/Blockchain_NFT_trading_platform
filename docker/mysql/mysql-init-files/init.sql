USE Owl;
alter database Owl default character set utf8 collate utf8_general_ci;

-- Member Table
-- 유저 가입
CREATE TABLE member
(
`id`            INT UNSIGNED    NOT NULL    AUTO_INCREMENT COMMENT '멤버 아이디',
`provider`      VARCHAR(30)     NOT NULL    COMMENT '로그인 타입',
`name`      VARCHAR(30)     NULL    COMMENT '유저 이름',
`iconURL`       VARCHAR(300)    NULL        COMMENT '유저 프로필 URL',
`wallet`       VARCHAR(300)    NULL        COMMENT '지갑 주소',
`privateCode`       VARCHAR(300)    NULL        COMMENT '지갑 프라이빗 코드',
CONSTRAINT PK_members PRIMARY KEY (id)
);


-- memberHistory
-- 유저 평가 기록
CREATE TABLE memberHistory
(
`id`                INT UNSIGNED    NOT NULL    AUTO_INCREMENT COMMENT '멤버 히스토리 아이디',
`memberID`          INT UNSIGNED    NOT NULL    COMMENT '작성자 아이디',
`targetMemberID`    INT UNSIGNED    NOT NULL    COMMENT '대상자 아이디',
`contentType`       VARCHAR(30)     NOT NULL    COMMENT '히스토리 타입',
`content`       VARCHAR(50)     NOT NULL    COMMENT '작성 내용',
`createdAt`        DATETIME        NOT NULL    COMMENT '작성일',
CONSTRAINT PK_memberHistory PRIMARY KEY (id)
);
-- 제약 조건 및 FK 설정
ALTER TABLE memberHistory
    ADD CONSTRAINT FK_memberHistory_memberID_to_member_id FOREIGN KEY (memberID)
        REFERENCES member (id) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE memberHistory
    ADD CONSTRAINT FK_memberHistory_targetMemberID_to_member_id FOREIGN KEY (targetMemberID)
        REFERENCES member (id) ON DELETE CASCADE ON UPDATE CASCADE;

-- item
-- NFT 정보 저장
CREATE TABLE item
(
`id`                INT UNSIGNED    NOT NULL    AUTO_INCREMENT COMMENT '아이템 아이디',
`memberID`          INT UNSIGNED    NOT NULL    COMMENT '소유주 아이디',
`createdAt`        DATETIME        NOT NULL    COMMENT '생성일',
CONSTRAINT PK_item PRIMARY KEY (id)
);
-- 제약 조건 및 FK 설정
ALTER TABLE item
    ADD CONSTRAINT FK_item_memberID_to_member_id FOREIGN KEY (memberID)
        REFERENCES member (id) ON DELETE CASCADE ON UPDATE CASCADE;

-- itemHistory
-- 아이템 정보
CREATE TABLE itemHistory
(
`id`                INT UNSIGNED    NOT NULL    AUTO_INCREMENT COMMENT '아이템 정보 인덱스',
`memberID`          INT UNSIGNED    NOT NULL    COMMENT '소유주 아이디',
`itemID`          INT UNSIGNED    NOT NULL    COMMENT '아이템 아이디',
`contentType`       VARCHAR(30)     NOT NULL    COMMENT '히스토리 타입',
`content`       VARCHAR(50)     NOT NULL    COMMENT '작성 내용',
`createdAt`        DATETIME        NOT NULL    COMMENT '생성일',
CONSTRAINT PK_itemHistory PRIMARY KEY (id)
);
-- 제약 조건 및 FK 설정
ALTER TABLE itemHistory
    ADD CONSTRAINT FK_itemHistory_memberID_to_member_id FOREIGN KEY (memberID)
        REFERENCES member (id) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE itemHistory
    ADD CONSTRAINT FK_itemHistory_itemID_to_item_id FOREIGN KEY (itemID)
        REFERENCES item (id) ON DELETE CASCADE ON UPDATE CASCADE;

-- tradeHistory
-- 거래 기록
CREATE TABLE tradeHistory
(
`id`                INT UNSIGNED    NOT NULL    AUTO_INCREMENT COMMENT '거래 기록 인덱스',
`memberID`          INT UNSIGNED    NOT NULL    COMMENT '보낸사람 아이디',
`targetMemberID`    INT UNSIGNED    NOT NULL    COMMENT '받은사람 아이디',
`itemID`          INT UNSIGNED    NOT NULL    COMMENT '아이템 아이디',
`createdAt`        DATETIME        NOT NULL    COMMENT '생성일',
CONSTRAINT PK_tradeHistory PRIMARY KEY (id)
);
-- 제약 조건 및 FK 설정
ALTER TABLE tradeHistory
    ADD CONSTRAINT FK_tradeHistory_memberID_to_member_id FOREIGN KEY (memberID)
        REFERENCES member (id) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE tradeHistory
    ADD CONSTRAINT FK_tradeHistory_targetMemberID_to_member_id FOREIGN KEY (targetMemberID)
        REFERENCES member (id) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE tradeHistory
    ADD CONSTRAINT FK_tradeHistory_itemID_to_item_id FOREIGN KEY (itemID)
        REFERENCES item (id) ON DELETE CASCADE ON UPDATE CASCADE;

-- market
-- 마켓
CREATE TABLE market
(
`id`                INT UNSIGNED    NOT NULL    AUTO_INCREMENT COMMENT '거래 인덱스',
`memberID`          INT UNSIGNED    NOT NULL    COMMENT '등록자',
`itemID`          INT UNSIGNED    NOT NULL    COMMENT '아이템 아이디',
`pay`       VARCHAR(30)     NOT NULL    COMMENT '가격',
`status`       VARCHAR(30)     NOT NULL    COMMENT '히스토리 타입',
`title`       VARCHAR(50)     NOT NULL    COMMENT '제목',
`content`       VARCHAR(100)     NOT NULL    COMMENT '작성 내용',
CONSTRAINT PK_market PRIMARY KEY (id)
);
-- 제약조건 및 FK 설정
ALTER TABLE  market
    ADD CONSTRAINT FK_market_memberID_to_member_id FOREIGN KEY (memberID)
        REFERENCES member (id) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE  market
    ADD CONSTRAINT FK_market_itemID_to_item_id FOREIGN KEY (itemID)
        REFERENCES item (id) ON DELETE CASCADE ON UPDATE CASCADE;