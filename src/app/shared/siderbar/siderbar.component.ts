import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/services.index';
declare const $;

@Component({
  selector: 'app-siderbar',
  templateUrl: './siderbar.component.html',
  styleUrls: ['./siderbar.component.scss']
})
export class SiderbarComponent implements OnInit {

  constructor(public _sidebar: SidebarService) { }

  ngOnInit() {
    /** Inicializar plugins da Siderbar */
    $(document).ready(() => {
      const trees: any = $('[data-widget="tree"]');
      trees.tree();
    });
  }

}
