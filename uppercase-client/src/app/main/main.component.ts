import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Params, Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

    form!: FormGroup

    fb = inject(FormBuilder)
    router = inject(Router)


    ngOnInit(): void {
        this.form = this.fb.group({
            text: this.fb.control('', [Validators.required])
        })
    }

    process() {
        console.info(this.form.value)
        const queryParams: Params = {text: this.form.value['text']}
        this.router.navigate(['/uppercase'], {queryParams})
    }
}
