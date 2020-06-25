import { Component, OnInit } from '@angular/core';
import { ProductService } from './../service/product.service';
import News from './../model/news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']})
export class NewsComponent implements OnInit {

  constructor(private productService: ProductService) { }

  news : News[];

  selectedNews: News;

  display: boolean = false;

  topic:string;
  detail:string;


  ngOnInit(): void {
    this.productService.getNews().
    then(
      news => 
      this.news = news
      );
  }

  onRowSelect(event) {
    this.display = true;
    this.detail = event.data.detail;
    this.topic = event.data.topic;
  }

}
