import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

import songStorageData from '../../assets/mockdata/songStorage.json'

interface Song {  
  id: Number;  
  image: String;  
  title: String;
  singer: String;
  fileName: String;
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
  announcement: string = "Bài hát (" + this.songs.length + ")";
  audioPlaying: HTMLAudioElement;
  @ViewChild('songImage') mySongImageRef : HTMLImageElement;
  @ViewChild('songName') mySongNameRef : ElementRef;
  @ViewChild('singerName') mySingerNameRef : ElementRef;
  

  constructor() { }

  ngOnInit() {
  }

  dasherize(string) {
    return string.replace(/[A-Z]/g, function(char, index) {
      return (index !== 0 ? '-' : '') + char.toLowerCase();
    });
  };

  playMusic(song: Song) {
    if (this.audioPlaying != null) {
      this.audioPlaying.pause();
      this.audioPlaying.currentTime = 0;
    }
    let audio = new Audio;
    let fileName = song.fileName;
    // this.mySongImageRef.src = '../../assets/albums/' + song.image + '.jpg'
    audio.src = '../../assets/songStorage/' + fileName;
    
    this.audioPlaying = audio;
    audio.load();
    audio.play();
  }

}
