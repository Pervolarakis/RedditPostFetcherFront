import { Component, Input, OnInit } from '@angular/core';
import { SearchHistoryService } from 'src/app/services/dashboard/search-history/search-history.service';
import { SearchResult } from 'src/app/services/dashboard/searchResult.type';
import { Chart, registerables  } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit{
  @Input() searchItem!: SearchResult;
  keys: string[]  = []
  data: {[key: string]: {[key: string]: number}} = {}
  totalUps: number[] = []; 
  totalDowns: number[] = []; 
  totalComms: number[] = []; 

  ngOnInit(): void {
    this.searchItem.posts.map((el, index) => {
      var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
      d.setUTCSeconds(el.created_utc);
      if (!this.data[d.getHours().toString()]){
        this.data[d.getHours().toString()] = {
          'ups':0,
          'downs':0,
          'comments':0
        }
      }
      this.data[d.getHours().toString()]['ups']+=el.ups
      this.data[d.getHours().toString()]['downs']+=el.downs
      this.data[d.getHours().toString()]['comments']+=el.num_comments
    })
    Object.keys(this.data).map((el, index)=>{
      this.totalUps.push(this.data[el]['ups'])
      this.totalDowns.push(this.data[el]['downs'])
      this.totalComms.push(this.data[el]['comments'])
    })
    Chart.register(...registerables);
    console.log(Object.keys(this.data))
    new Chart('canvas', {
      type: 'line',
      data: {
        labels: Object.keys(this.data),
        datasets: [
          {
            label: 'Upvotes',
            data: this.totalUps,
            borderColor: '#9966ff',
            fill: false
          },
          {
            label: 'Downvotes',
            data: this.totalDowns,
            borderColor: '#ffcd56',
            fill: false
          },
          {
            label: 'Comments',
            data: this.totalComms,
            borderColor: '#4bc0c0',
            fill: false
          }
        ]
      },
      options: {
        plugins: {
            title: {
                display: true,
                text: 'Activity per time of the day'
            }
        }
    }
    })

  }


}
