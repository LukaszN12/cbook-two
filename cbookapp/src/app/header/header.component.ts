import {Component, OnInit} from '@angular/core';
import {DataService} from "../shared/data.service";
import {Response} from "@angular/http";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  onSaveData(){
    this.dataService.storeRecipes()
      .subscribe(
        (response: Response) => {
          console.log(response);
        }
      );
  }
  onFetchData(){
    this.dataService.getRecipes();
  }
}
