import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpaceListComponent } from './components/space-list/space-list.component';
import { SpaceResolverService } from './resolvers/space-resolver.service';

const routes: Routes = [
  { path: 'space', component: SpaceListComponent, resolve: { spaceData: SpaceResolverService } },
  { path: '',   redirectTo: '/space', pathMatch: 'full' }, // redirect to `first-
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
