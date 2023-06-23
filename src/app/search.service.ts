import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class SearchService {
  searchList(list: string[], query: string): string[] {
    return list.filter((item) => item.toLowerCase().indexOf(query.toLowerCase()) === 0);
  }
}