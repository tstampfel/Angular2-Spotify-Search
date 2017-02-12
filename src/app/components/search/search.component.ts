import { Artist } from '../../Artist';
import { SpotifyService } from '../../services/spotify.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
searchStr: string;
searchRes: Artist[];
  constructor(private spotifyService: SpotifyService) { }

searchMusic(){
    this.spotifyService.searchMusic(this.searchStr)
    .debounceTime(1000)     
    .subscribe(
      res =>{
       this.searchRes = res.artists.items;
      }
    );
}


  ngOnInit() {
  }

}
