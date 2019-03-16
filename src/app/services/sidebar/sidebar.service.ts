import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any = [
    {
      title: 'Dashboard',
      icons: 'fa fa-dashboard',
      url: '/dashboard',
      submenu: [
        { title: '', url: '', icons: '' }
      ]
    },
  ];

  constructor() { }
}
