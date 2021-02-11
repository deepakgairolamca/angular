import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpaceListComponent } from './components/space-list/space-list.component';
import { Html5TagsComponent } from './components/html5-tags/html5-tags.component';


@NgModule({
  declarations: [
    AppComponent,
    SpaceListComponent,
    Html5TagsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
