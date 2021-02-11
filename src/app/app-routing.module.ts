import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Html5TagsComponent } from './components/html5-tags/html5-tags.component';
import { SpaceListComponent } from './components/space-list/space-list.component';
import { SpaceResolverService } from './resolvers/space-resolver.service';

const routes: Routes = [
  { path: 'html5', component: Html5TagsComponent },
  { path: 'space', component: SpaceListComponent, resolve: { spaceData: SpaceResolverService } },
  {
    path: 'shop',
    loadChildren: () => import('./modules/shop/shop.module').then(m => m.ShopModule),
    data: { preload: true }
  },
  { path: '', redirectTo: '/space', pathMatch: 'full' }, // redirect to `first-
];

class CustomPreloadingStrategy implements PreloadingStrategy {
  preload(route: Route, load: Function): Observable<any> {
    return route.data && route.data.preload ? load() : of(null)
  }
}
@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: CustomPreloadingStrategy })],
  exports: [RouterModule],
  providers: [CustomPreloadingStrategy],
})
export class AppRoutingModule { }


