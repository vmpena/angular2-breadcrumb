  export interface Name {
    first: string;
    last: string;
  }

  export interface Friend {
    id: number;
    name: string;
  }

  export interface Customer {
    ID: number;
    isActive: boolean;
    balance: string;
    picture: string;
    name: Name;
    company: string;
    email: string;
    phone: string;
    address: string;
    description: string;
    registered: string;
    friends: Friend[];
  }
