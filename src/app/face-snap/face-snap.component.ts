import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';


@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {

  @Input() faceSnap!: FaceSnap;
 
  isSnap!: boolean;
  buttonText!: string;

  ngOnInit(): void {
    this.isSnap = false;
    this.buttonText = 'snap';
  }
  
onAddSnap() {
  if(this.isSnap == false) {
    this.faceSnap.snaps++;
    this.buttonText = 'un-snap';
    this.isSnap = true;
  } else {
    this.faceSnap.snaps--;
    this.buttonText = 'snap';
    this.isSnap = false;
  }
}

}
