import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';


@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {

  @Input() faceSnap!: FaceSnap;
 
  isSnap!: boolean;
  buttonText!: string;

  constructor(private faceSnapsService: FaceSnapsService, private router: Router) {

  }

  ngOnInit(): void {
    this.isSnap = false;
    this.buttonText = 'snap';
  }

  onViewFaceSnap() {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }
  
onAddSnap() {
  if(this.isSnap == false) {
    this.faceSnapsService.snapFaceSnapById(this.faceSnap.id,false);
    this.buttonText = 'unsnap';
    this.isSnap = true;
  } else {
    this.faceSnapsService.snapFaceSnapById(this.faceSnap.id,true);
    this.buttonText = 'snap';
    this.isSnap = false;
  }
}

}
