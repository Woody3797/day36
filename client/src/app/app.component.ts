import { Component, inject } from '@angular/core';
import { Params, Router } from '@angular/router';
import { NumberService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    router = inject(Router)
    numService = inject(NumberService)


    displayNumber(num: number) {
        this.numService.toDisplay = num
        const queryParams: Params = { size: 'md'}
        this.router.navigate([ '/', 'number',  num], { queryParams: queryParams })
    }
}
