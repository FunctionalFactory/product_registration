import { Product } from '../entities/products.entity';
import { CreateProductDto, UpdateProductDto } from '../dto/products.dto';

export interface IProductService {
  create(createProductDto: CreateProductDto): Promise<Product>;
  findAll(): Promise<Product[]>;
  findOne(id: number): Promise<Product>;
  update(id: number, updateProductDto: UpdateProductDto): Promise<Product>;
  remove(id: number): Promise<void>;
}