import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Put Some of them on there photos on here right here:';
  image1 = 'assets/imgs/pointing-spidey.gif';
  image2 = 'assets/imgs/mob-psycho-shy.gif';
  image3 = 'https://c.tenor.com/Yl_rvunWEGkAAAAC/sontoyolo-face-palm.gif';

  constructor() { }

  ngOnInit() {
  }

}