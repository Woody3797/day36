import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable, map } from "rxjs";
import { UppercaseResponse } from "./model";

@Injectable()
export class UppercaseService {

    http = inject(HttpClient)

    convertToUppercase(text: string): Observable<string> {
        const params = new HttpParams().set('text', text)

        return this.http.get<UppercaseResponse>('/api/uppercase', {params}).pipe(
            map(resp => resp.text)
        )
    }
}