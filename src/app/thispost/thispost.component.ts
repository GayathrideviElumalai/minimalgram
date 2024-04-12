import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
import list from '../../list';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog} from '@angular/material/dialog'
@Component({
  selector: 'app-thispost',
  templateUrl: './thispost.component.html',
  styleUrls: ['./thispost.component.css']
})
export class ThispostComponent implements OnInit {
  id:any
  post:any=[]
  commentform:any
  @ViewChild('addcomment') addcomment:any
  constructor(private ActivatedRoute: ActivatedRoute,private Router: Router, private MatDialog:MatDialog) { }

  ngOnInit(): void {
    this.commentform = new FormGroup({
      user :  new FormControl(),
      comment : new FormControl()
    })
    this.id = this.ActivatedRoute.snapshot.params['id'];
    console.log('id',this.id)
    this.post = list.map((index:any)=>{
      if(index.id == this.id) {
        return index
      }
    }).filter(Boolean);
    console.log('post',this.post)
  }
  likeToggle(id:any) {
    this.post[0].isLiked = !this.post[0].isLiked
    if(this.post[0].isLiked) {
      this.post[0].likecount++
    } else {
      this.post[0].likecount--
    }
    
  }
  imageFilter: string | undefined;

  blurImage(blur: boolean,id:any) {
    // this.temppostlist = this.postlist;
    // this.postlist = [];
    // for(let item of this.temppostlist) {
    //   if(item.id == id) {
    //     item.imageFilter = blur ? 'blur(3px)' : 'none';
    //     item.showIcon = blur
    //   }
    // }
    // this.postlist = this.temppostlist
  }
  clickhere(id:any) {
    this.MatDialog.open(this.addcomment)
    // this.Router.navigate(['/post/'+id])
  }
  back(){
    this.Router.navigate(['/allpost'])
  }
}
