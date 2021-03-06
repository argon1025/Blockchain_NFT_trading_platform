import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { PassportModule } from '@nestjs/passport';
import { Member } from './entities/Member';
import { Item } from './entities/Item';
import { MemberHistory } from './entities/MemberHistory';
import { ItemHistory } from './entities/ItemHistory';
import { Market } from './entities/Market';
import { TradeHistory } from './entities/TradeHistory';
import { ItemModule } from './item/item.module';
import { MarketModule } from './market/market.module';
import { TradeRequest } from './entities/TradeRequest';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    PassportModule.register({ session: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('DB_HOST', 'localhost'),
        port: configService.get<number>('DB_PORT', 3306),
        username: configService.get<string>('DB_USERNAME', 'user'),
        password: configService.get<string>('DB_PASSWORD', 'password'),
        database: configService.get<string>('DB_DATABASE', 'database'),
        entities: [Member, Item, MemberHistory, ItemHistory, Market, TradeHistory, TradeRequest],
        synchronize: false,
        logging: true,
        keepConnectionAlive: true,
        autoLoadEntities: true,
      }),
      inject: [ConfigService],
    }),
    AuthModule,
    ItemModule,
    MarketModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
