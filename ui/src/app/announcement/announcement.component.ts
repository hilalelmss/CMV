import { Component, OnInit } from '@angular/core';
import Announcement from './../model/announcement';
import { ProductService } from './../service/product.service';


@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css']
})
export class AnnouncementComponent implements OnInit {

  constructor(private productService: ProductService) {

   }

  announcement :Announcement[];

  ngOnInit(): void {
      this.productService.getAnnouncement().
      then(
        announcement=>
        this.announcement=announcement
        );
  }

}
