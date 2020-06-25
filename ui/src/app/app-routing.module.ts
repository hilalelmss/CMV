import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { AnnouncementComponent } from './announcement/announcement.component';


const routes: Routes = [
  {path: '', component: NewsComponent},
  {path: 'news', component: NewsComponent},
  {path: 'announcement', component: AnnouncementComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
