import { Component, OnInit } from '@angular/core';
import { MyServiceService} from '../../services/my-service.service';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  person : any ={};

  constructor(private myservice: MyServiceService) { }

  ngOnInit() {
    this.person = this.myservice.selectedUser;
    console.log(this.person);
  }

  doRefresh(event){
    setTimeout(() =>{
      event.target.Complete();
    }, 2000);
  }

}
