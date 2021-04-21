import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { TYPEORMCONFIG } from './config/typeorm.config';

@Module({
  imports: [
    ProductsModule,
    TypeOrmModule.forRoot(TYPEORMCONFIG)
  ],
})
export class AppModule {}
