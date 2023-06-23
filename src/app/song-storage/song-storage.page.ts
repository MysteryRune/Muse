import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-song-storage',
  templateUrl: './song-storage.page.html',
  styleUrls: ['./song-storage.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class SongStoragePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
