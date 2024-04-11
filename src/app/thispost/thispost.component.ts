import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import list from '../../list';
@Component({
  selector: 'app-thispost',
  templateUrl: './thispost.component.html',
  styleUrls: ['./thispost.component.css']
})
export class ThispostComponent implements OnInit {
  id:any
  post:any=[]
  constructor(private ActivatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.ActivatedRoute.snapshot.params['id'];
    console.log('id',this.id)
    this.post = list.map((index:any)=>{
      if(index.id == this.id) {
        return index
      }
    }).filter(Boolean);
    console.log('post',this.post)
  }

}
