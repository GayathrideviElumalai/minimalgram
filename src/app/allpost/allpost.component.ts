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
  temppostlist:any
  showIcon = false;
  constructor(private Router: Router) { }

  ngOnInit(): void {
    console.log(list)
    this.postlist = list;
  }
  clickhere(id:any) {
    this.Router.navigate(['/post/'+id])
  }
  likeToggle(id:any) {
    this.temppostlist = this.postlist;
    this.postlist = [];
    for(let item of this.temppostlist) {
      if(item.id == id) {
        item.isLiked = !item.isLiked
      }
    }
    this.postlist = this.temppostlist

  }
  imageFilter: string | undefined;

  blurImage(blur: boolean,id:any) {
    this.temppostlist = this.postlist;
    this.postlist = [];
    for(let item of this.temppostlist) {
      if(item.id == id) {
        item.imageFilter = blur ? 'blur(3px)' : 'none';
        item.showIcon = blur
      }
    }
    this.postlist = this.temppostlist
  }
}
