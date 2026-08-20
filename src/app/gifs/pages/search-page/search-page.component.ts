import { Component, inject } from '@angular/core';
import { GiftList } from "../../components/gif-list/gif-list";
import { GifService } from '../../services/gifs.service';

@Component({
  selector: 'app-search-page',
  imports: [GiftList],
  templateUrl: './search-page.html',
})
export default class SearchPage {

  gifService = inject( GifService )

  onSearch(query: string) {
  this.gifService.searchGifs(query);

  }

}
