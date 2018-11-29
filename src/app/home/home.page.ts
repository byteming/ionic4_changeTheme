import { Component, } from '@angular/core';
import { MyServiceService} from './../services/my-service.service';
import { NavController, AlertController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public persons: Array<any> = [];
  public keyword: string;

  constructor(private navCtrl :NavController,
    private myService: MyServiceService,
    private  alartCtrl: AlertController){
      this.loadUser();
    }

    onKeyworkChange(e){
      console.log(e);
    }
   

    openDetail(person){
      this.myService.selectedUser = person;
      this.navCtrl.navigateForward('/detail');
    }
    shareToFB(event: any){
      console.log("Copy the link.");
    }

    async loadUser(){
      const persons = await this.myService.getUser();
      this.persons = persons.results;
      console.log(this.persons);
    }
}
