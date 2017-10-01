
//es el que va estar todos los archivos de terceros deben estar aqui
import { BrowserModule } from '@angular/platform-browser';//defecto
import { NgModule } from '@angular/core';//defecto

import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { FroalaEditorModule, FroalaViewModule  } from 'angular-froala-wysiwyg';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';//default
import { ExpositorsListComponent } from './components/expositors-list/expositors-list.component';
import { ExpositorComponent } from './components/expositor/expositor.component';
import { ExpositorUpdateComponent } from './components/expositor-update/expositor-update.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ExpositorTalleresComponent } from './components/expositor-talleres/expositor-talleres.component';

import { ExpositorService  } from './services/expositor.service';
import { BlockUIModule } from 'ng-block-ui';
import { FooterComponent } from './templates/footer/footer.component';
import { HeaderComponent } from './templates/header/header.component';
import { KeysPipe } from './pipes/keys.pipe';
//estos son los modulos que va a utilizar el aplicativo
@NgModule({
  declarations: [ //dedine las clases que estarn disponibles para cada modulo
    AppComponent,
    ExpositorsListComponent,
    ExpositorComponent,
    ExpositorUpdateComponent,
    AboutComponent,
    NotFoundComponent,
    ExpositorTalleresComponent,
    FooterComponent,
    HeaderComponent,
    KeysPipe
  ],
  //de tercero de angular
  imports: [//define la lista de modulos que se  puede necesitar dentro
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BlockUIModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),    
    AppRoutingModule
  ],

  //estos son todos los servicios que se van a llamar de http
  providers: [
    ExpositorService
  ],
  bootstrap: [AppComponent]
})

//clase importante
export class AppModule { }
