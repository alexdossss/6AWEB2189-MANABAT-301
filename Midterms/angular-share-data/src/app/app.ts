import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Employee } from './employee';
import { Products } from './products';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-share-data');

  // public employees = [
  //     {
  //       id: 101,
  //       firstname: "Joseph",
  //       lastname: "Dizon",
  //       email: "jdixon@hau.edu.ph",
  //     },
  //     {
  //       id: 102,
  //       firstname: "James",
  //       lastname: "Atienza",
  //       email: "jatienza@hau.edu.ph",
  //     },
  //     {
  //       id: 103,
  //       firstname: "John",
  //       lastname: "Cena",
  //       email: "jcena@hau.edu.ph",
  //     },
  //     {
  //       id: 104,
  //       firstname: "Robert",
  //       lastname: "Quintana",
  //       email: "rquintana@hau.edu.ph"
  //     },
  // ];

  public employees2:{
    id: number,
    firstname: string,
    lastname: string,
    email: string,
  }[] = [];


  // public products = [
  //     {
  //       p_id: "P-101",
  //       name: "Logitech Mouse",
  //       desc: "6 Button Mechanical Mouse",
  //       price: 899.00,
  //     },
  //     {
  //       p_id: "P-102",
  //       name: "JBL BT Speaker",
  //       desc: "Waterproof Radio 360 Surround",
  //       price: 1099.00,
  //     },
  //     {
  //       p_id: "P-103",
  //       name: "Mechanical Keyboard",
  //       desc: "Hot-swappable RGB Backlit",
  //       price: 2395.00,
  //     },
  //     {
  //       p_id: "P-104",
  //       name: "Oculus Meta",
  //       desc: "All in-one Gaming Headset",
  //       price: 22450.00,
  //     },
  // ];

  public products2:{
    p_id: string,
    name: string,
    desc: string,
    price: number,
  }[] = [];

  constructor(
    private _employeeService: Employee,
    private _productService: Products
  ){}

  ngOnInit(){
    this.employees2 = this._employeeService.getEmployees();
    this.products2 = this._productService.getProducts();
  }

}
