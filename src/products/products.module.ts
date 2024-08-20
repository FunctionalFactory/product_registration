import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { Product } from './entities/products.entity';
import { PRODUCT_SERVICE } from './constants/product-service.token';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  controllers: [ProductsController],
  providers: [
    {
      provide: PRODUCT_SERVICE,
      useClass: ProductsService,
    },
  ],
  exports: [PRODUCT_SERVICE],
})

export class ProductsModule {}