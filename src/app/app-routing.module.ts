import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AlbumListComponent } from './components/album-list/album-list.component';
import {AlbumDetailComponent} from './components/album-detail/album-detail.component'

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "albums", component: AlbumListComponent },
  { path: "detail/:id", component: AlbumDetailComponent },
  {path: "detail/:url", component: AlbumDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
