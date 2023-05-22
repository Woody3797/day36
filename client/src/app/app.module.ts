import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { BearComponent } from './bear/bear.component';
import { NumberComponent } from './number/number.component';
import { NumberService } from './data.service';

const appRoutes: Routes = [
    { path: '', component: MainComponent, title: 'Main' },
    { path: 'bear', component: BearComponent, title: 'Bear' },
    { path: 'number/:num', component: NumberComponent, },
    { path: '**', redirectTo: '/', pathMatch: 'full' },

]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    BearComponent,
    NumberComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [ NumberService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
