import { Controller, Get } from '@nestjs/common'
import { ProductService } from 'src/products/product.service'


@Controller('products')
export class ProductController {
    constructor(private readonly ProductService: ProductService ) {}



    // @Get()
    // findAll(){
    //     return {
    //         sucesss: true,
    //         data: this.ProductService.findAll(),
    //         message: 'Fetched products sucessfully'
    //     }
    // }
}