import { Component } from '@angular/core';
import { Product } from '../models/product.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductService } from './product.service';
@Component({
  selector: 'app-products',
  imports: [CommonModule, RouterModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  standalone: true
})
export class ProductsComponent {
  categories = ['Чехлы', 'Зарядные устройства', 'Наушники', 'Телефоны'];
  selectedCategory: string | null = null;
  products: Product[] = [];

  constructor(private productService: ProductService) {}
  
  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  get filteredProducts() {
    return this.selectedCategory ? this.products.filter(p => p.category === this.selectedCategory) : this.products;
  };

  selectCategory(category: string) {
    this.selectedCategory = category;
  }

  removeProduct(id: number) {
    this.products = this.products.filter(p => p.id !== id);
  }

  likeProduct(id: number) {
    const product = this.products.find(p => p.id === id);
    if (product) product.likes++;
  }
}