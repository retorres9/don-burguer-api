import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Product } from './product.entity';
import { ProductsService } from './products.service';
import { ProductDto } from './dto/product.interface';

@Controller('products')
export class ProductsController {
    constructor(private productService: ProductsService) {}

    @Get()
    getProducts(): Promise<Product[]> {
        return this.productService.getProducts();
    }

    @Get('/:id')
    getProduct(@Param('id') id: string): Promise<Product> {
        return this.productService.getProduct(id);
    }

    @Post()
    createProduct(@Body()productDto: ProductDto): Promise<Product> {
        return this.productService.createProduct(productDto);
    }
}
