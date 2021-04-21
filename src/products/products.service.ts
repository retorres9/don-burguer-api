import { Injectable, NotFoundException } from '@nestjs/common';
import { ProductDto } from './dto/product.interface';
import { Product } from './product.entity';
import { ProductRepository } from './product.respository';

@Injectable()
export class ProductsService {
    constructor(private productRepository: ProductRepository) {}

    createProduct(productDto: ProductDto): Promise<Product> {
        return this.productRepository.createProduct(productDto);
    }

    getProducts(): Promise<Product[]> {
        return this.productRepository.getProducts();
    }

    async getProduct(id: string): Promise<Product> {
        console.log(id);
        
        const found = await this.productRepository.findOne({where: {id}})
        console.log(found);
        
        if (!found) {
            throw new NotFoundException(`El producto con el ${id} no se ha encontrado`);
        }
        return found;
    }
}
