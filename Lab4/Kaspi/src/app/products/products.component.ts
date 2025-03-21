import { Component } from '@angular/core';
import { Product } from '../models/product.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-products',
  imports: [CommonModule, RouterModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  standalone: true
})
export class ProductsComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Для Apple Iphone 13 Прозрачный',
      price: 99,
      imageUrl: '1.jpg',
      description: 'Надежный и стильный чехол для вашего смартфона, обеспечивающий защиту от царапин, ударов и загрязнений. Идеально повторяет форму устройства, сохраняя удобный доступ ко всем кнопкам, портам и камере. Выполнен из качественных материалов, которые гарантируют долговечность и комфортное использование. Элегантный дизайн подчеркивает ваш стиль и обеспечивает дополнительный уровень защиты для вашего устройства.',
      shareUrl: 'https://kaspi.kz/shop/p/dlja-apple-iphone-13-prozrachnyi-106185651/?c=750000000'
    },
    {
      id: 2,
      name: 'Для Apple Iphone 11 Прозрачный',
      price: 89,
      imageUrl: '2.jpg',
      description: 'Легкий, но при этом максимально- надежный чехол для Apple iPhone 11. Усиленные углы чехла - снижают силу удара на 30%. Полная защита камеры и выступающие над поверхностью экрана бортики - создают дополнительную защиту для экрана и камеры телефона. Кристально- прозрачный, тонкий и пластичный материал плотно облегает корпус смартфона, сохраняя стиль и индивидуальность гаджета. Микроперфорация по внутренней поверхности чехла препятствует образованию влажных разводов сохраняя стильный внешний вид смартфона. Благодаря своей гибкости, чехол плотно прилегает к устройству, легко надевается. Чехол оснащен всеми необходимыми отверстиями для удобного доступа к элементам управления смартфоном.',
      shareUrl: 'https://kaspi.kz/shop/p/dlja-apple-iphone-11-prozrachnyi-103661424/?c=750000000'
    },
    {
      id: 3,
      name: 'Для Apple Iphone 15 Pro Прозрачный',
      price: 118,
      imageUrl: '3.jpg',
      description: 'Надежный и стильный чехол для вашего смартфона, обеспечивающий защиту от царапин, ударов и загрязнений. Идеально повторяет форму устройства, сохраняя удобный доступ ко всем кнопкам, портам и камере. Выполнен из качественных материалов, которые гарантируют долговечность и комфортное использование. Элегантный дизайн подчеркивает ваш стиль и обеспечивает дополнительный уровень защиты для вашего устройства',
      shareUrl: 'https://kaspi.kz/shop/p/dlja-apple-iphone-15-pro-prozrachnyi-113282783/?c=750000000'
    },
    {
      id: 4,
      name: 'Для Apple Iphone 15 Pro Max Прозрачный',
      price: 117,
      imageUrl: '4.jpg',
      description: 'Надежный и стильный чехол для вашего смартфона, обеспечивающий защиту от царапин, ударов и загрязнений. Идеально повторяет форму устройства, сохраняя удобный доступ ко всем кнопкам, портам и камере. Выполнен из качественных материалов, которые гарантируют долговечность и комфортное использование. Элегантный дизайн подчеркивает ваш стиль и обеспечивает дополнительный уровень защиты для вашего устройства.',
      shareUrl: 'https://kaspi.kz/shop/p/dlja-apple-iphone-15-pro-max-prozrachnyi-113308490/?c=750000000'
    },
    {
      id: 5,
      name: 'Для Apple Iphone 14 Прозрачный',
      price: 140,
      imageUrl: '5.jpg',
      description: 'Надежный и стильный чехол для вашего смартфона, обеспечивающий защиту от царапин, ударов и загрязнений. Идеально повторяет форму устройства, сохраняя удобный доступ ко всем кнопкам, портам и камере. Выполнен из качественных материалов, которые гарантируют долговечность и комфортное использование. Элегантный дизайн подчеркивает ваш стиль и обеспечивает дополнительный уровень защиты для вашего устройства.',
      shareUrl: 'https://kaspi.kz/shop/p/dlja-apple-iphone-14-prozrachnyi-107664472/?c=750000000'
    },
    {
      id: 6,
      name: 'Для Apple Iphone 11 черный',
      price: 646,
      imageUrl: '6.jpg',
      description: 'Надежный и стильный чехол для вашего смартфона, обеспечивающий защиту от царапин, ударов и загрязнений. Идеально повторяет форму устройства, сохраняя удобный доступ ко всем кнопкам, портам и камере. Выполнен из качественных материалов, которые гарантируют долговечность и комфортное использование. Элегантный дизайн подчеркивает ваш стиль и обеспечивает дополнительный уровень защиты для вашего устройства.',
      shareUrl: 'https://kaspi.kz/shop/p/dlja-apple-iphone-11-chernyi-113766311/?c=750000000'
    },
    {
      id: 7,
      name: 'Для Apple Iphone 13 черный',
      price: 647,
      imageUrl: '7.jpg',
      description: 'Надежный и стильный чехол для вашего смартфона, обеспечивающий защиту от царапин, ударов и загрязнений. Идеально повторяет форму устройства, сохраняя удобный доступ ко всем кнопкам, портам и камере. Выполнен из качественных материалов, которые гарантируют долговечность и комфортное использование. Элегантный дизайн подчеркивает ваш стиль и обеспечивает дополнительный уровень защиты для вашего устройства.',
      shareUrl: 'https://kaspi.kz/shop/p/dlja-apple-iphone-11-prozrachnyi-106882555/?c=750000000'
    },
    {
      id: 8,
      name: 'Для Apple Iphone 13 Прозрачный',
      price: 206,
      imageUrl: '8.jpg',
      description: 'Надежный и стильный чехол для вашего смартфона, обеспечивающий защиту от царапин, ударов и загрязнений. Идеально повторяет форму устройства, сохраняя удобный доступ ко всем кнопкам, портам и камере. Выполнен из качественных материалов, которые гарантируют долговечность и комфортное использование. Элегантный дизайн подчеркивает ваш стиль и обеспечивает дополнительный уровень защиты для вашего устройства.',
      shareUrl: 'https://kaspi.kz/shop/p/dlja-apple-iphone-11-prozrachnyi-106882555/?c=750000000'
    },
    {
      id: 9,
      name: 'Для Apple Iphone 11 Прозрачный',
      price: 197,
      imageUrl: '9.jpg',
      description: 'Надежный и стильный чехол для вашего смартфона, обеспечивающий защиту от царапин, ударов и загрязнений. Идеально повторяет форму устройства, сохраняя удобный доступ ко всем кнопкам, портам и камере. Выполнен из качественных материалов, которые гарантируют долговечность и комфортное использование. Элегантный дизайн подчеркивает ваш стиль и обеспечивает дополнительный уровень защиты для вашего устройства.',
      shareUrl: 'https://kaspi.kz/shop/p/dlja-apple-iphone-11-belyi-106559203/?c=750000000'
    },
    {
      id: 10,
      name: 'Для Apple Iphone 11 белый',
      price: 395,
      imageUrl: '10.jpg',
      description: 'Надежный и стильный чехол для вашего смартфона, обеспечивающий защиту от царапин, ударов и загрязнений. Идеально повторяет форму устройства, сохраняя удобный доступ ко всем кнопкам, портам и камере. Выполнен из качественных материалов, которые гарантируют долговечность и комфортное использование. Элегантный дизайн подчеркивает ваш стиль и обеспечивает дополнительный уровень защиты для вашего устройства.',
      shareUrl: 'https://kaspi.kz/shop/p/emy-dlja-apple-iphone-16-pro-prozrachnyi-124504364/?c=750000000'
    }
  ];
}