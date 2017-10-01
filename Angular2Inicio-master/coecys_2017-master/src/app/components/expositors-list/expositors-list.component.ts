import { Component, OnInit } from '@angular/core';
import { ExpositorService } from '../../services/expositor.service';
import { Expositor } from '../../classes/expositor';
import { Router  } from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui'

@Component({//esto so n template externos
  selector: 'app-expositors-list',//esto es una metadate
  templateUrl: './expositors-list.component.html',//esto es una metadata
  styleUrls: ['./expositors-list.component.css']
})
export class ExpositorsListComponent implements OnInit {
  titulo = "expositores coecys jajaja";
  expositoresList:Array<Expositor>;
  @BlockUI() blockUI: NgBlockUI;
  constructor(
    private service: ExpositorService,
    private router: Router
  ) { }

  sanitizeName(name:string):string{
    return name.split(' ').join('-');
  }

  getExpositores() {
    this.service.getExpositores()
                .then(expositores => {
                  this.expositoresList = expositores;
                  this.blockUI.stop();
                }).catch(err =>{
                  console.log(err);
                })
  }

  gotoDetail(expositor:Expositor, $key:any) {
    localStorage.setItem('expositorId',$key);
    this.router.navigate(['/expositors', this.sanitizeName(expositor.name)]);
  }

  ngOnInit() {
    this.blockUI.start("Cargando Expositores");
    this.getExpositores();
  }

}
