import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  page: string;
  description: string;

  constructor(private router: Router, private title: Title, private meta: Meta) {
    this.getDataRoute().subscribe(data => {
      this.page = data.title;
      this.description = data.description;
      this.title.setTitle(this.page);

      const m1: MetaDefinition = { name: 'description', content: this.page };
      this.meta.updateTag(m1);
    });
  }

  ngOnInit() {
  }

  getDataRoute() {
    return this.router.events.pipe(
      filter(evento => evento instanceof ActivationEnd),
      filter((evento: ActivationEnd) => evento.snapshot.firstChild === null),
      map((evento: ActivationEnd) => evento.snapshot.data)
    );
  }

}
