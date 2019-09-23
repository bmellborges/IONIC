import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/model/player';
import { PlayerService } from 'src/app/services/player.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.page.html',
  styleUrls: ['./add-player.page.scss'],
})
export class AddPlayerPage implements OnInit {

  protected player: Player = new Player;

  constructor(
    protected playerService:PlayerService,
    protected alertController: AlertController,
  ) { }

  ngOnInit() {
  }

  onsubmit(form){
    this.playerService.save(this.player).then(
      res=>{
        console.log("Cadastrado!");
        this.presentAlert("Aviso", "Cadastrado!")
      },
      erro=>{
        console.log("Erro: " + erro);
        this.presentAlert("Erro","Não foi possivel cadastrar!")
      }
    )
  }
  //Alerts-------------------
  async presentAlert(tipo:string, texto:string) {
    const alert = await this.alertController.create({
      header: tipo,
      //subHeader: 'Subtitle',
      message: texto,
      buttons: ['OK']
    });
    await alert.present();
  }
}
