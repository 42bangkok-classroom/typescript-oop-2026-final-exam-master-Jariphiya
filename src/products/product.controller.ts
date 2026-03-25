import { Controller, Get } from '@nestjs/common';
import { ProductService } from 'src/products/product.service';
import { ApiResponse } from 'src/interfaces/response.interface';
import { Product } from './product.interface';

@Controller('products')
export class ProductController {
  constructor(private readonly ProductService: ProductService) {}

//   @Get()
//   findAll():ApiResponse<Product>{
//       return {
//         //   sucesss: true,
//         //   data: this.ProductService.findAll(),
//         //   message: 'Fetched products sucessfully'
//       }
//   }
}
