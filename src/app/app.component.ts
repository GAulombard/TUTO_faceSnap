import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap;
  myLastSnap!: FaceSnap;

  ngOnInit() {
    this.mySnap = new FaceSnap('Archibald',
    'Un nounours très douillet ! pouet pouet',
    new Date(),
    0,
    'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg');
    this.myOtherSnap = new FaceSnap('Doudou',
    'Un nounours très douillet ! pouet pouet',
    new Date(),
    5,
    'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg');
    this.myLastSnap = new FaceSnap('Pouet',
    'Un nounours très douillet ! pouet pouet',
    new Date(),
    70,
    'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg');
  }

}
