// Consume a Service

//  1. Add OnInit
import { Component, OnInit } from '@angular/core';

//  2. Add references to custom data type and Service class
import { Customer } from './customer';
import { CustomerService } from './customer-service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})

//  3. Implement OnInit
export class CustomerComponent implements OnInit {

  errorMessage: string;

  // 4. Add variable to hold collection of custom data types
  customers: Customer[];

  //  5. Add reference to Service in constructor
  constructor(private customerService: CustomerService) {

  }

  //  4. Implement ngOnInit method to load data when component is called
  ngOnInit(): void {
    this.customerService.getCustomers()
      .subscribe(customers => this.customers = customers,
      error => this.errorMessage = <any>error);
  }

 }
