import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from '../products/products.component';
import { Product } from '../models/product.model';
import { ProductService } from '../products/product.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  product: Product | undefined;

  constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router) {
    const productId = Number(this.route.snapshot.paramMap.get('id'));

    // Получаем продукты через сервис
    const products = this.productService.getProducts();
    this.product = products.find(p => p.id === productId);
  }

  baseUrl: string = 'http://localhost:4200/product/';

  shareOnWhatsApp() {
    if (this.product) {
      const text = `Посмотрите этот товар: ${this.product.name} - ${this.product.shareUrl}`;
      window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
    }
  }
  
  shareOnTelegram() {
    if (this.product) {
      const text = `Посмотрите этот товар: ${this.product.name} - ${this.product.shareUrl}`;
      window.open(`https://t.me/share/url?url=${encodeURIComponent(this.product.shareUrl)}&text=${encodeURIComponent(text)}`, '_blank');
    }
  }
  goHome() {
    this.router.navigate(['/']); // Навигация на главную
  }
}