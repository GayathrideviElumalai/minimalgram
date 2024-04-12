import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
import list from '../../list';
@Component({
  selector: 'app-thispost',
  templateUrl: './thispost.component.html',
  styleUrls: ['./thispost.component.css']
})
export class ThispostComponent implements OnInit {
  id:any
  post:any=[]
  constructor(private ActivatedRoute: ActivatedRoute,private Router: Router) { }

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
  likeToggle(id:any) {
    // this.temppostlist = this.postlist;
    // this.postlist = [];
    // for(let item of this.temppostlist) {
    //   if(item.id == id) {
    //     item.isLiked = !item.isLiked
    //   }
    // }
    // this.postlist = this.temppostlist

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
    // this.Router.navigate(['/post/'+id])
  }
  back(){
    this.Router.navigate(['/allpost'])
  }
}
