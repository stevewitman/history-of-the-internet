import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  data;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get('assets/data.json').subscribe(data =>{
      console.log(data);
      this.data = data;
    });
  }

}
