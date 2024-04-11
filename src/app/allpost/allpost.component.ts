import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'
import list from '../../list';

@Component({
  selector: 'app-allpost',
  templateUrl: './allpost.component.html',
  styleUrls: ['./allpost.component.css']
})
export class AllpostComponent implements OnInit {
  postlist:any
  constructor(private Router: Router) { }

  ngOnInit(): void {
    console.log(list)
    this.postlist = list;
  }
  clickhere(id:any) {
    this.Router.navigate(['/post/'+id])
  }
}
