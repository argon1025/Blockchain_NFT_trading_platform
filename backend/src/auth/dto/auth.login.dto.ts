import { ApiProperty } from '@nestjs/swagger';

export class AuthLoginDTO {
  @ApiProperty({
    example: '0x15a3fe3974ebe469b00e67ad67bb3860ad3fc3d739287cdbc4ba558ce7130bee205e5e38d6ef156f1ff6a4df17bfa72a1e61c429f92613f3efbc58394d00c9891b',
    description: '암호키',
    required: true,
  })
  signed: string;

  @ApiProperty({
    example: '0x15a3fe3974ebe469b00e67ad67bb3860ad3fc3d739287cdbc4ba558ce7130bee205e5e38d6ef156f1ff6a4df17bfa72a1e61c429f92613f3efbc58394d00c9891b',
    description: '지갑 주소',
    required: true,
  })
  address: string;
}
