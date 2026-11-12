import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  employees = [
    {
      id: 1,
      name: 'Arun Kumar',
      email: 'arun@gmail.com',
      department: 'IT',
      status: 'Active',
    },
    {
      id: 2,
      name: 'Rahul Raj',
      email: 'rahul@gmail.com',
      department: 'HR',
      status: 'Inactive',
    },
    {
      id: 3,
      name: 'Anjali',
      email: 'anjali@gmail.com',
      department: 'Finance',
      status: 'Active',
    },
    {
      id: 4,
      name: 'Nikhil',
      email: 'nikhil@gmail.com',
      department: 'IT',
      status: 'Active',
    },
    {
      id: 5,
      name: 'Sneha',
      email: 'sneha@gmail.com',
      department: 'Marketing',
      status: 'Inactive',
    },
  ];
}
