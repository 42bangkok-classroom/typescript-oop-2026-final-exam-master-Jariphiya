import { Injectable } from '@nestjs/common';
import { Product } from 'src/products/product.interface';

@Injectable()
export class ProductService {
  private readonly products = [];
}
