import { Module } from '@nestjs/common';
import { TransactionsModule } from './transactions/transactions.module';
import { Transaction } from './transactions/entities/transaction.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'admin123',
      database: 'payment_platform',
      entities: [Transaction],
      synchronize: true,
    }),
    TransactionsModule,
  ],
})
export class AppModule {}
