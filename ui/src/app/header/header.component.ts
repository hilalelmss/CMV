import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  items: MenuItem[];
  activeItem: MenuItem;


  ngOnInit(): void {
      this.items = [
        {label: 'Haberler', icon: 'pi pi-fw pi-home', url : 'news'},
        {label: 'Duyurular', icon: 'pi pi-fw pi-file', url : 'announcement'}
    ];
    this.activeItem = this.items[0];
  }

}
