import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, Routes} from '@angular/router';
import { AuthorInfoComponent } from './author-info/author-info.component';

export const authorsRoutes: Routes = [
  {path: ':id', component: AuthorInfoComponent}
];

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  //Submit function required for the form 
  formSubmit(id: string): void {
    this.router.navigate(['./', id],{ relativeTo: this.route})
  }

}
