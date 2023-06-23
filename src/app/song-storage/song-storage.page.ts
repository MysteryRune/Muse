import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

import songStorageData from '../../assets/mockdata/songStorage.json'

interface Song {  
  id: Number;  
  image: String;  
  title: String;
}  

@Component({
  selector: 'app-song-storage',
  templateUrl: './song-storage.page.html',
  styleUrls: ['./song-storage.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})

export class SongStoragePage implements OnInit {

  songs: Song[] = songStorageData;
  announcement: string = "Bài hát (" + this.songs.length + ")"

  constructor() { }

  ngOnInit() {
  }

  dasherize(string) {
    return string.replace(/[A-Z]/g, function(char, index) {
      return (index !== 0 ? '-' : '') + char.toLowerCase();
    });
  };

}
