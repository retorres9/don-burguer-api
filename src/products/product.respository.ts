import { EntityRepository, Repository } from "typeorm";
import { Product } from './product.entity';
import { ProductDto } from './dto/product.interface';
import { BadRequestException } from "@nestjs/common";

@EntityRepository(Product)
export class ProductRepository extends Repository<Product>{
    async createProduct(productDto: ProductDto) {
        const {name, description, price, img} = productDto;
        const product = new Product();
        product.name = name;
        product.description = description;
        product.price = price;
        product.img = img;
        try {
            await product.save();
        } catch (error) {
            if (error.code === 'ER_DATA_TOO_LONG') {                
                throw new BadRequestException('Uno de los campos excede la longitud máxima de caracteres')
            }
        }
        return product;
    }

    async getProducts(): Promise<Product[]> {
        const query = this.createQueryBuilder('product');
        query.where('product.isAvaliable = true');
        const products = query.getMany();
        return products;
    }
    
}