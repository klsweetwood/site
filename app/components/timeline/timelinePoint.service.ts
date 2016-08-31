import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { TimelinePoint } from './';
import { Observable } from 'rxjs';

const URL_EVENT = 'timelinePoints.json';

@Injectable()
export class TimelinePointService {
    
    constructor(private http: Http) { }

    getPoints(): Observable<TimelinePoint[]> {
        return this.http.get(URL_EVENT)
            .map((resp: Response) => resp.json());
    }
}