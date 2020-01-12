import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterItemComponent } from './character-item/character-item.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { HeaderComponent } from './header/header.component';
import { LogService } from './log.service';
import { StarWarsService } from './star-wars.service';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    CharacterListComponent,
    CharacterItemComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [StarWarsService, LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
