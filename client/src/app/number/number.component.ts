import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { NumberService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css']
})
export class NumberComponent implements OnInit, OnDestroy {

    numberService = inject(NumberService)
    activatedRoute = inject(ActivatedRoute)
    title = inject(Title)

    toDisplay = 0
    imageSize = 0
    params$!: Subscription

    ngOnInit(): void {
        this.toDisplay = this.numberService.toDisplay
        this.toDisplay = this.activatedRoute.snapshot.params['num']
        const size = this.activatedRoute.snapshot.queryParams['size']

        this.updateView(this.toDisplay, size)

        this.params$ = this.activatedRoute.params.subscribe(
            values => {
                console.info('values: ', values)
                this.updateView(values['num'], 'sm')
            }
        )
    }

    ngOnDestroy(): void {
        this.params$.unsubscribe()
    }

    private updateView(num: number, size: string) {
        this.toDisplay = num
        this.title.setTitle('Number: ' + this.toDisplay)

        switch (size) {
            case 'sm':
                this.imageSize = 100
                break;
            default:
            case 'md':
                this.imageSize = 200
                break;
            case 'lg':
                this.imageSize = 400
                break;
        }
    }
}
