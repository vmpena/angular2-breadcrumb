// Implement Parameterized Route

//  1. Import core Angular libraries
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

//  2. Import Subscription from rxjs
import { Subscription } from 'rxjs/Subscription';

//  3. Import custom data type(s) and Service
import { Customer } from '../customer/customer';
import { CustomerService } from '../customer/customer-service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})

//  4. Implement OnInit and OnDestroy
export class CustomerDetailComponent implements OnInit,OnDestroy {
  pageTitle = "Details";
  errorMessage: string;

  //  5. add private member to hold reference to rxjs Subscription
  private subscription: Subscription;

  //  6. add reference to custom data type
  private customer: Customer;

  //  7. add references to Routing objects and data Service
  constructor(private route: ActivatedRoute,
              private router: Router,
              private customerService: CustomerService) { }

  //  8. implement ngOnInit
  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(
      params => {
        let id = +params['id'];
        this.getCustomer(id);
      });
  }

  //  9. implement OnDestroy
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  //  10. create method to call data service
  getCustomer(id: number) {
    this.customerService.getCustomer(id).subscribe(
      customer => this.customer = customer,
      error => this.errorMessage = <any>error);
  }

  onBack(): void {
    this.router.navigate(['/customer']);
  }

}
