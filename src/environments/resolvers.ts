// import { Injectable } from '@angular/core';
// import { Resolve } from '@angular/router';
// import { Observable } from 'rxjs';
// import { Product } from 'src/app/core/models/Product';
// import { ProductService } from 'src/app/core/services/product.service';

// @Injectable({
//   providedIn: 'root',
// })
// export class ProductsResolver implements Resolve<Product[]> {
//   constructor(private productService: ProductService) {}
//   resolve(): Observable<Product[]> {
//     return this.productService.getAllProducts();
//   }
// resolve(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ): Observable<Product> {
//     const productId = route.paramMap.get('productId');
  
//     return this.productService.getProductById(
//       productId != null ? productId : ''
//     );
//   }
// }
