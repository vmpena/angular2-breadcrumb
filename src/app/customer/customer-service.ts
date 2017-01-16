// Creating a Service

// 1. Add core Angular libraries
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

// 2. Add rxjs and any necessary features
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

// 3. Import custom data model
import { Customer } from './customer.ts';

// 4. Add Injectable decorator to class
@Injectable()
export class CustomerService{

  //  5. Add reference to data source. This will typically be
  //  an external API of some kind. Here it's a mock data source
  private dataSource = 'api/customers/customers.json';

  // 6. Add constructor, passing in HTTP capability
  constructor(private http: Http) { }

  // 7. Add method to retrieve all custom objects
  getCustomers(): Observable<Customer[]> {
    return this.http.get(this.dataSource)
      .map((response: Response) => <Customer[]> response.json())
      .do(data => console.log('Returned data: ' +  JSON.stringify(data)))
      .catch(this.handleError);
  }

  // 8. Add method to retrieve a single object
  getCustomer(id: number): Observable<Customer> {
    return this.getCustomers()
      .map((customers: Customer[]) => customers.find(c => c.ID === id));
  }

  // 9. Add Error Handler
  private handleError(error: Response) {
    // Normally this would have custom error handling logic
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}

