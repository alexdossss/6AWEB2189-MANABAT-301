import { AsyncPipe, CommonModule, CurrencyPipe, DatePipe, DecimalPipe, KeyValuePipe, LowerCasePipe, PercentPipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-pipes-demo',
  imports: [DatePipe, UpperCasePipe, LowerCasePipe, CurrencyPipe, SlicePipe, AsyncPipe, DecimalPipe, PercentPipe, TitleCasePipe, CommonModule, KeyValuePipe],
  templateUrl: './pipes-demo.html',
  styleUrl: './pipes-demo.css',
})
export class PipesDemo {
  presentDate = new Date();
  price = 20000;
  time$ = interval(1000).pipe(map(() => new Date()));
  fruits = ['Apple', 'Orange', 'Grapes', 'Mango', 'Kiwi', 'Pomegranate'];
  decimalNum1 : number = 8.7589623;
  decimalNum2 : number = 5.43;

  projectCompletion: number = 0.854;
  growthRate: number = 0.123456;

  userFullName: string = 'jOHN dOE';
  pageHeading: string = 'WELCOME TO THE DASHBOARD';
  jobTitle: string = 'senior software engineer';

  userStats = {
    name: 'Alexander',
    level: 42,
    rank: 'Gold',
    points: 1500,
    active: true
  };
}
