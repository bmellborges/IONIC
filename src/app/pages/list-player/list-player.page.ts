import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Player } from '../../model/player';

@Component({
  selector: 'app-list-player',
  templateUrl: './list-player.page.html',
  styleUrls: ['./list-player.page.scss'],
})
export class ListPlayerPage implements OnInit {

  protected players: any;

  constructor(
    protected playerService: PlayerService,
    private router: Router,
    protected alertController: AlertController
  ) { }

  ngOnInit() {
    this.refreshPlayers()
  }

  apagar(player) {
    this.presentAlertConfirm(player);
  }

  editar(player) {
    this.router.navigate(['/tabs/addPlayer/', player.key])
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

  refreshPlayers() {
    this.playerService.gelAll().subscribe(
      res => {
        this.players = res;
      }
    )
  }

  //Alerts-------------------
  async presentAlert(tipo: string, texto: string) {
    const alert = await this.alertController.create({
      header: tipo,
      //subHeader: 'Subtitle',
      message: texto,
      buttons: ['OK']
    });
    await alert.present();
  }

async presentAlertConfirm(player) {
  const alert = await this.alertController.create({
    header: 'Deletar dados',
    message: 'Apagar dados do <strong>usuário</strong>?',
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
          console.log('Confirm Cancel: blah');
        }
      }, {
        text: 'Confirmar',
        handler: () => {
          this.playerService.remove(player).then(
            res => {
              this.presentAlert("Aviso", "Apagado com sucesso!"),
                this.refreshPlayers()
            }
          ),
            erro => {
              this.presentAlert("Erro", "Ao apagar o item!");
            }
        }
      }
    ]
  });

  await alert.present();
}
}