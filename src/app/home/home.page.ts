import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

import recentlyPlayed from '../../assets/mockdata/recentlyPlayed.json'
import heavyRotation from '../../assets/mockdata/heavyRotation.json'
import jumBackIn from '../../assets/mockdata/jumpBackIn.json'

// import { SwiperModule } from '../../../node_modules/swiper/modules';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, /*SwiperModule*/]
})
export class HomePage implements OnInit {
  data = [
    {
      title: 'Đã phát gần đây',
      albums: recentlyPlayed
    },
    {
      title: 'Tuyển tập hàng đầu',
      albums: heavyRotation
    },
    {
      title: 'Gợi ý của Muse',
      albums: jumBackIn
    },
  ];

  opts = {
    slidesPerView: 2.4,
    slidesOffsetBefore: 20,
    spaceBetween: 20,
    freeMode: true
  };

  constructor(private router: Router) { }

  openAlbum(album) {
    const titleEscaped = encodeURIComponent(album.title);
    this.router.navigateByUrl(`/home/home${titleEscaped}`);
  }

  // Helper function for image names
  dasherize(string) {
    return string.replace(/[A-Z]/g, function(char, index) {
      return (index !== 0 ? '-' : '') + char.toLowerCase();
    });
  };

  ngOnInit() {
  }

}