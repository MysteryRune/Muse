import { routes } from './../tabs/tabs.routes';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

import songStorageData from '../../assets/mockdata/songStorage.json'

interface Song {  
  id: Number;  
  image: String;  
  title: String;
  singer: String;
}  

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AccountPage implements OnInit {

  songs: Song[] = songStorageData;

  constructor() { }

  ngOnInit() {
  }

}
