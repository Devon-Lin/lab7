import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from "rxjs";
import { AuthorService } from '../service/author.service';
import { Author } from 'src/app/books/model/book';

@Component({
  selector: 'app-author-info',
  templateUrl: './author-info.component.html',
  styleUrls: ['./author-info.component.css']
})
export class AuthorInfoComponent implements OnInit {

  authorExists!: Author | null;
  private subscription!: Subscription;

  constructor(private route: ActivatedRoute, private authorService: AuthorService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params.id;
      this.subscription = this.authorService.getAuthorInfo(id).subscribe(
        (data: Author) => {
          this.authorExists = data;
        },
        (_: any) => {
          this.authorExists = null;
        });
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
