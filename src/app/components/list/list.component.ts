import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  postsList = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getList().subscribe((response: any[]) => {
      this.postsList = response;
      this.focusOnItemAtIndex(50);
    })
  }


  focusOnItemAtIndex(index: number) {
    document.getElementById(`${index}`).focus();
  }

}
