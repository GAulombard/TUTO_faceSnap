import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
    providedIn: 'root'
})
export class FaceSnapsService {

    faceSnaps: FaceSnap[] = [
        {
            id: 1,
            title: 'Archibald',
            description: 'Un nounours très douillet ! pouet pouet',
            createdDate: new Date(),
            snaps: 0,
            imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
            location: 'Paris'
        },
        {
            id: 2,
            title: 'Doudou',
            description: 'Un nounours très douillet ! pouet pouet',
            createdDate: new Date(),
            snaps: 150,
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg'
        },
        {
            id: 3,
            title: 'Pouet',
            description: 'Un nounours très douillet ! pouet pouet',
            createdDate: new Date(),
            snaps: 250,
            imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg'
        }
    ];


    getAllFaceSnaps(): FaceSnap[] {
        return this.faceSnaps;
    }

    getFaceSnapById(id:number): FaceSnap {
        const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id == id);
        if (!faceSnap) {
            throw new Error('FaceSnap not found -> id = '+id);
        } else {
            return faceSnap;
        }
    }

    snapFaceSnapById(faceSnapId: number, snapType: boolean): void {
        const faceSnap = this.getFaceSnapById(faceSnapId);
        (snapType ? faceSnap.snaps-- : faceSnap.snaps++ );
    }
}