import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class SearchPage implements OnInit {
  searchQuery: string = '';
  originalList: Array<string> = [
    'Warriors',
    'Hello',
    'Perfect',
    'Shape Of You',
    'Lean On',
    'Fake Love',
    'End Like This',
    'Wildfire',
    'Be Alright',
    'Waves',
    'Star Walkin\'',
    'Shelter',
    'Camelia',
    'Da Capo',
    'Canon in D',
    'Nightglow',
    'Everything Goes On',
    'Burning Bright',
    'Counting Stars',
    'I Really Want To Stay At Your House',
    'Radiant',
    'Despacito',
    'Say Something',
    'Die For You', 
    'River Flows In You',
    'Moon Halo',
    'Waiting For Love',
    'The Night',
    'Bohemian Rhapsody',
    'Hotel California',
    'Hey Jude',
    'Imagine',
    'Smells Like Teen Spirit',
    'Like a Rolling Stone',
    'Sweet Child o\' Mine',
    'Stairway to Heaven',
    'Thriller',
    'Back in Black',
    'Let It Be',
    'Wonderwall',
    'Yesterday',
    'Boogie Wonderland',
    'Billie Jean',
    'Livin\' on a Prayer',
    'Purple Haze',
    'Dancing Queen',
    'Born to Run',
    'Sweet Home Alabama',
    'Hallelujah',
    'Don\'t Stop Believin\'',
    'Crazy',
    'Every Breath You Take',
    'A Thousand Miles',
    'All of Me',
    'Africa',
    'Angels',
    'Apologize',
    'I Will Always Love You',
    'I Want to Hold Your Hand',
    'I Just Called to Say I Love You',
    'I Don\'t Want to Miss a Thing',
    'I Can\'t Help Falling in Love'
  ];
  sortedList!: Array<string>;
  filteredList!: Array<string>;

  sortListAlphabetically() {
    this.sortedList = [...this.originalList].sort((a, b) => a.localeCompare(b));
  }
  constructor(private searchService: SearchService) {
    this.filteredList = this.sortedList;
  }

  ngOnInit() {
    this.sortListAlphabetically();
    this.search();
  }

  search() {
    if (this.searchQuery.trim() === '') {
      this.filteredList = this.sortedList;
    } else {
      this.filteredList = this.searchService.searchList(this.originalList, this.searchQuery);
    }
  }
  
}
