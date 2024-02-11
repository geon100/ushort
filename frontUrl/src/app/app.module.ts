import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShortenerComponent } from './components/shortener/shortener.component';
import { QRCodeModule } from 'angularx-qrcode';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomeComponent } from './components/home/home.component';
import { RedirectionComponent } from './components/redirection/redirection.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
@NgModule({
  declarations: [
    AppComponent,
    ShortenerComponent,
    HomeComponent,
    RedirectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    QRCodeModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatTooltipModule,MatButtonModule,MatInputModule,MatToolbarModule,MatSnackBarModule //angular material
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
