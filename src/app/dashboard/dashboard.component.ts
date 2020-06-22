import {Component} from '@angular/core';
import {DxChartComponent} from 'devextreme-angular'

@Component({
    templateUrl: './dashboard.component.html'
})

export class DashboardComponent {

  dataSource: any[];
  detailedDataSource: any[];

  constructor( ){
    this.dataSource = [
      {Year:'1/1/2020', SO:10, CO:0, Trend:0},
      {Year:'2/1/2020', SO:50, CO:0, Trend:0},
      {Year:'3/1/2020', SO:75, CO:0, Trend:5},
      {Year:'4/1/2020', SO:85, CO:0, Trend:15},
      {Year:'5/1/2020', SO:95, CO:5, Trend:10},
      {Year:'6/1/2020', SO:60, CO:5, Trend:20},
      {Year:'7/1/2020', SO:60, CO:15, Trend:10},
      {Year:'8/1/2020', SO:50, CO:15, Trend:30},
      {Year:'9/1/2020', SO:65, CO:0, Trend:30},
      {Year:'10/1/2020', SO:55, CO:10, Trend:20},
      {Year:'11/1/2020', SO:60, CO:30, Trend:0},
      {Year:'12/1/2020', SO:50, CO:20, Trend:0},
      {Year:'1/1/2021', SO:40, CO:10, Trend:0},
      {Year:'2/1/2021', SO:20, CO:0, Trend:0},
      {Year:'3/1/2021', SO:0, CO:0, Trend:0}
    ];

    this.detailedDataSource = [
      {Year:'3/1/2020', SO:10, CO:0, Trend:0},
      {Year:'3/2/2020', SO:20, CO:0, Trend:0},
      {Year:'3/3/2020', SO:25, CO:0, Trend:5},
      {Year:'3/4/2020', SO:15, CO:0, Trend:15},
      {Year:'3/5/2020', SO:20, CO:5, Trend:10},
      {Year:'3/6/2020', SO:10, CO:5, Trend:20},
      {Year:'3/7/2020', SO:20, CO:15, Trend:10},
      {Year:'3/8/2020', SO:25, CO:15, Trend:30},
      {Year:'3/9/2020', SO:30, CO:0, Trend:30},
      {Year:'3/10/2020', SO:35, CO:10, Trend:20},
      {Year:'3/11/2020', SO:35, CO:30, Trend:0},
      {Year:'3/12/2020', SO:35, CO:20, Trend:0},
      {Year:'3/13/2020', SO:35, CO:10, Trend:0},
      {Year:'3/14/2020', SO:30, CO:0, Trend:0},
      {Year:'3/15/2020', SO:50, CO:0, Trend:0},
      {Year:'3/16/2020', SO:35, CO:0, Trend:0},
      {Year:'3/17/2020', SO:40, CO:0, Trend:0},
      {Year:'3/18/2020', SO:45, CO:0, Trend:5},
      {Year:'3/19/2020', SO:55, CO:0, Trend:15},
      {Year:'3/20/2020', SO:50, CO:5, Trend:10},
      {Year:'3/21/2020', SO:60, CO:5, Trend:20},
      {Year:'3/22/2020', SO:50, CO:15, Trend:10},
      {Year:'3/23/2020', SO:56, CO:15, Trend:30},
      {Year:'3/24/2020', SO:59, CO:0, Trend:30},
      {Year:'3/25/2020', SO:66, CO:10, Trend:20},
      {Year:'3/26/2020', SO:62, CO:30, Trend:0},
      {Year:'3/27/2020', SO:80, CO:20, Trend:0},
      {Year:'3/28/2020', SO:65, CO:10, Trend:0},
      {Year:'3/29/2020', SO:90, CO:0, Trend:0},
      {Year:'3/30/2020', SO:95, CO:0, Trend:0},

      {Year:'4/1/2020', SO:90, CO:0, Trend:0},
      {Year:'4/2/2020', SO:85, CO:0, Trend:0},
      {Year:'4/3/2020', SO:95, CO:0, Trend:5},
      {Year:'4/4/2020', SO:95, CO:0, Trend:15},
      {Year:'4/5/2020', SO:90, CO:5, Trend:10},
      {Year:'4/6/2020', SO:60, CO:5, Trend:20},
      {Year:'4/7/2020', SO:80, CO:15, Trend:10},
      {Year:'4/8/2020', SO:85, CO:15, Trend:10},
      {Year:'4/9/2020', SO:75, CO:0, Trend:10},
      {Year:'4/10/2020', SO:70, CO:10, Trend:10},
      {Year:'4/11/2020', SO:60, CO:20, Trend:0},
      {Year:'4/12/2020', SO:65, CO:15, Trend:0},
      {Year:'4/13/2020', SO:60, CO:5, Trend:0},
      {Year:'4/14/2020', SO:40, CO:0, Trend:0},
      {Year:'4/15/2020', SO:55, CO:0, Trend:0},
      {Year:'4/16/2020', SO:50, CO:0, Trend:0},
      {Year:'4/17/2020', SO:45, CO:0, Trend:0},
      {Year:'4/18/2020', SO:45, CO:0, Trend:5},
      {Year:'4/19/2020', SO:45, CO:0, Trend:15},
      {Year:'4/20/2020', SO:45, CO:5, Trend:10},
      {Year:'4/21/2020', SO:45, CO:5, Trend:20},
      {Year:'4/22/2020', SO:45, CO:15, Trend:10},
      {Year:'4/23/2020', SO:45, CO:15, Trend:30},
      {Year:'4/24/2020', SO:40, CO:0, Trend:30},
      {Year:'4/25/2020', SO:20, CO:10, Trend:20},
      {Year:'4/26/2020', SO:35, CO:30, Trend:0},
      {Year:'4/27/2020', SO:30, CO:20, Trend:0},
      {Year:'4/28/2020', SO:40, CO:10, Trend:0},
      {Year:'4/29/2020', SO:20, CO:0, Trend:0},
      {Year:'4/30/2020', SO:0, CO:0, Trend:0}

    ];



  }


  ngOnInit() {

  }
}
