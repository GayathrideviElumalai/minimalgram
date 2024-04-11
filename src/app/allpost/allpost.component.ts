import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'

@Component({
  selector: 'app-allpost',
  templateUrl: './allpost.component.html',
  styleUrls: ['./allpost.component.css']
})
export class AllpostComponent implements OnInit {

  constructor(private Router: Router) { }

  ngOnInit(): void {
  }
  clickhere() {
    this.Router.navigate(['/post/'+'2'])
  }
}
