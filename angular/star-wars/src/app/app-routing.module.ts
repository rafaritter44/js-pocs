import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterListComponent } from './character-list/character-list.component';
import { TabsComponent } from './tabs/tabs.component';

const routes: Routes = [
  { path: 'characters', component: TabsComponent, children: [
    { path: '', redirectTo: 'all', pathMatch: 'full' },
    { path: ':side', component: CharacterListComponent }
  ] },
  { path: 'new-character', loadChildren: './create-character/create-character.module.ts#CreateCharacterModule' },
  { path: '**', redirectTo: '/characters' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
