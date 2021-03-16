import { ArrayDataSource } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label, Color, BaseChartDirective } from 'ng2-charts';
import { CpuInfo, ProcessorUsage } from 'src/app/interfaces/cpu-info';

@Component({
  selector: 'app-cpu',
  templateUrl: './cpu.component.html',
  styleUrls: ['./cpu.component.css']
})
export class CpuComponent implements OnInit {
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];

  public lineChartPlugins = [];
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  lineChartOptions: ChartOptions = {
    animation: {
      duration: 0
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'CPU load %'
        },
        ticks: {
          min: 0,
        }
      }],
      xAxes: [ {
        scaleLabel: {
          display: true,
          labelString: 'time(hh:mm:ss)'
        },
      } ],
    }
 };

  public lineChartLabels: Label[] = [];
  public lineChartType:ChartType = 'line';
  public lineChartLegend = true;
  public lineChartData: ChartDataSets[] = [
     { data: [], label: 'System' },
     { data: [], label: 'User' , backgroundColor: 'blue'}
  ];
  data = new Array();
  userLoad = new Array();

  oldProcessorUsage: ProcessorUsage | undefined ;

  previousCpuInfo: CpuInfo | undefined;

  constructor() { }

  ngOnInit() {
    this.requestCpuData();
    setInterval(() => {
      this.requestCpuData();
    }, 30000);
  }

  public requestCpuData() {
    // The ID of the extension we want to talk to.
    var laserExtensionId = "jgehapfghmkbnbljjbcjfgepkkmihoib";
      chrome.runtime.sendMessage(laserExtensionId, {getCpuData: true, getMemoryData: false},
      (response:CpuInfo) => {

        let systemPercentage = 0;
        let userPercentage = 0;

        for(let i=0; i < response.numOfProcessors; i++) {
          let currentProcessorUsage = response.processors[i].usage;
          if(this.previousCpuInfo) {
            this.oldProcessorUsage = this.previousCpuInfo.processors[i].usage;
            systemPercentage = Math.floor((currentProcessorUsage.kernel + currentProcessorUsage.user - this.oldProcessorUsage.kernel - this.oldProcessorUsage.user) / (currentProcessorUsage.total - this.oldProcessorUsage.total) * 100);
            userPercentage = Math.floor((currentProcessorUsage.user -  this.oldProcessorUsage.user) / (currentProcessorUsage.total - this.oldProcessorUsage.total) * 100);

          } else {
            systemPercentage = Math.floor((currentProcessorUsage.kernel + currentProcessorUsage.user) / currentProcessorUsage.total * 100)
            userPercentage = Math.floor((currentProcessorUsage.user) / currentProcessorUsage.total * 100)
          }

        }
        this.data.push(systemPercentage);
        this.userLoad.push(userPercentage);

        this.lineChartData[0].data = this.data;
        this.lineChartData[1].data = this.userLoad;

        const date = new Date();
        const time = date.getHours().toString() + ':' + date.getMinutes().toString() + ':' + date.getSeconds().toString();
        this.lineChartLabels.push(time);
        this.chart?.chart.update();

        this.previousCpuInfo = response;
      }
      );
      
  }

}
