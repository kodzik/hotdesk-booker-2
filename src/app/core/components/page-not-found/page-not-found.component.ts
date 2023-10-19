import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
})
export class PageNotFoundComponent implements OnInit {
  counter = 5;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.redirect();
  }

  redirect() {
    setInterval(() => {
      this.counter -= 1;
      if (this.counter === 0) this.router.navigateByUrl('/booker/live');
    }, 1000);
  }
}
