import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-player',
  templateUrl: './list-player.page.html',
  styleUrls: ['./list-player.page.scss'],
})
export class ListPlayerPage implements OnInit {

  protected players: any;

  constructor(
    protected playerService: PlayerService,
    private router: Router
  ) { }

  ngOnInit() {
    this.playerService.gelAll().subscribe(
      res => {
        this.players = res;
      }
    )
  }

  apagar(player) {
  }

  editar(player) {
    this.router.navigate(['/tabs/addPlayer/' , player.key])
  }

  async doRefresh(event) {
    //console.log('Begin async operation');
    this.playerService.gelAll().subscribe(
      res => {
        this.players = res;
        setTimeout(() => {
          //console.log('Async operation has ended');
          event.target.complete();
        }, 500);
      }
    );
  }
}
