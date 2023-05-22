import { Component, OnInit, inject } from '@angular/core';
import { NumberService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css']
})
export class NumberComponent implements OnInit {

    numberService = inject(NumberService)
    activatedRoute = inject(ActivatedRoute)

    toDisplay = 0
    imageSize = 200

    ngOnInit(): void {
        // this.toDisplay = this.numberService.toDisplay
        this.toDisplay = this.activatedRoute.snapshot.params['num']
        const size = this.activatedRoute.snapshot.queryParams['size']

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
