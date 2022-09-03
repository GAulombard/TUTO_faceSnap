import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  faceSnaps!: FaceSnap[];

  ngOnInit() {
    this.faceSnaps = [
      {
        title: 'Archibald',
        description: 'Un nounours très douillet ! pouet pouet',
        createdDate: new Date(),
        snaps: 0,
        imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        location: 'Paris'
      },
      {
        title: 'Doudou',
        description: 'Un nounours très douillet ! pouet pouet',
        createdDate: new Date(),
        snaps: 150,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg'
      },
      {
        title: 'Pouet',
        description: 'Un nounours très douillet ! pouet pouet',
        createdDate: new Date(),
        snaps: 250,
        imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg'
      }
    ];
  }

}
