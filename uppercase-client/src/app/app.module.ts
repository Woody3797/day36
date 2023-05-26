import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { UppercaseComponent } from './uppercase/uppercase.component';
import { UppercaseService } from './uppercase.service';

const appRoutes: Routes = [
    { path: '', component: MainComponent, },
    { path: 'uppercase', component: UppercaseComponent, },
    { path: '**', redirectTo: '/', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    UppercaseComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ UppercaseService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
