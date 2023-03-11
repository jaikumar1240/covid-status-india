import { Component, OnInit, ViewChild } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexFill,
  ApexXAxis,
  ApexDataLabels,
  ApexYAxis,
  ApexTitleSubtitle
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
  fill: ApexFill;
  dataLabels: ApexDataLabels;
};

@Component({
  selector: 'app-state-view',
  templateUrl: './state-view.component.html',
  styleUrls: ['./state-view.component.css']
})
export class StateViewComponent implements OnInit {
  @ViewChild("chart") chart;
  public chartOptions: Partial<ChartOptions>;
  districts: any = ['Please Select a state'];
  total: any;
  confirmed: any;
  deceased: any;
  recovered: any;
  tested: any;

  constructor(
    private client: ClientService
  ) {
    this.chartOptions = {
      series: [
        {
          name: "Bubble1",
          data: this.generateData(0)
        },
      ],
      chart: {
        height: 350,
        type: "bubble"
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        opacity: 0.8
      },
      title: {
        text: "Simple Bubble Chart"
      },
      xaxis: {
        tickAmount: 12,
        type: "category"
      },
      yaxis: {
        max: 70
      }
    };
  }


  ngOnInit(): void {
    if (Object.keys(this.client.completeData).length == 0) {
      this.client.getData();
    }
  }


  public get data() {
    return this.client.completeData;
  }

  public get namingObj() {
    return this.client.namingObj;
  }

  stateSelected(state) {
    this.districts = Object.keys(state.value.districts)
    this.confirmed = state.value.total.confirmed;
    this.deceased = state.value.total.deceased;
    this.recovered = state.value.total.recovered;
    this.tested = state.value.total.tested;
    console.log(this.districts);

    this.generateData(this.districts.length)
  }

  public generateData(length) {
    var i = 0;
    var series: any = [];
    // while (i < count) {

    for (let i = 0; i < 10; i++) {

      var x = i
      var y = i + 10

      var z = 20
      console.log(i);
      
      series.push([x, y, z]);
    }
    return series;
  }




}
