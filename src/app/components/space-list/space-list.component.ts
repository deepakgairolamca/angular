import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpaceService } from 'src/app/services/space.service';

@Component({
  selector: 'app-space-list',
  templateUrl: './space-list.component.html',
  styleUrls: ['./space-list.component.scss']
})
export class SpaceListComponent implements OnInit {
  spaceData: any
  pageNo: number = 1;
  loader: boolean = true;
  years = ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020']
  constructor(private activeRoute: ActivatedRoute, private spaceService: SpaceService) {

  }

  ngOnInit(): void {
    this.activeRoute.data.subscribe(res => {
      this.loader = false;
      this.spaceData = res.spaceData;
    });

  }

  loadMore(pageNo: number) {
    this.pageNo = (pageNo + 1);
    this.filter(this.pageNo * 8);
  }

  filter(limit?: number, launchSuccess?: any, landSuccess?: any, launchYear?: any) {
    let params = new HttpParams();
    params = params.set('limit', !!limit ? limit.toString() : '8');
    if (typeof launchSuccess === 'boolean') {
      params = params.set('launch_success', (launchSuccess).toString());
    }
    if (typeof landSuccess === 'boolean') {
      params = params.set('land_success', landSuccess.toString());
    }
    if (!!launchYear) {
      params = params.set('launch_year', launchYear);
    }
    this.loader = true;
    this.spaceService.getSpaceData(params).subscribe(res => {
      this.loader = false;
      this.spaceData = res;
    })
  }

}
