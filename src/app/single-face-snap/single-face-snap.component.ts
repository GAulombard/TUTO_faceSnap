import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

  @Input() faceSnap!: FaceSnap;
 
  isSnap!: boolean;
  buttonText!: string;

  constructor(private faceSnapsService: FaceSnapsService, private route:ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    this.isSnap = false;
    this.buttonText = 'snap';
    const faceSnapId = this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId);
  }

  onBackFaceSnaps() {
    this.router.navigateByUrl('facesnaps');
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
