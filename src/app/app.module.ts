import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatBadgeModule} from '@angular/material/badge';
import { BarraPesquisaComponent } from './barra-pesquisa/barra-pesquisa.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    BarraPesquisaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSnackBarModule,
    MatBadgeModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
