import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-list-player',
  templateUrl: './list-player.page.html',
  styleUrls: ['./list-player.page.scss'],
})
export class ListPlayerPage implements OnInit {

  protected players: any;

  constructor(
    protected playerService: PlayerService
  ) { }

  ngOnInit() {
    this.players = this.playerService.gelAll();
    console.log(this.players);
    
  }

}
