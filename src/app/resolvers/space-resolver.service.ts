import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { SpaceService } from '../services/space.service';

@Injectable({
  providedIn: 'root'
})
export class SpaceResolverService implements Resolve<any>{

  constructor(private spaceService: SpaceService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    let params = new HttpParams();
    params = params.set('limit', '8');
    return this.spaceService.getSpaceData(params);
  }

}
