import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchItem: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      if (params['searchItem'])
        // Giving Access to search Items
        this.searchItem = params['searchItem'];
    });
  }

  // Search Method when search anything and get food
  search(): void {
    if(this.searchItem)
    this.router.navigateByUrl('/search/' + this.searchItem)  //making search button alive
  }
}
