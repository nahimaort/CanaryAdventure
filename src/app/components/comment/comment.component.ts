import {Component, Input, OnInit} from '@angular/core';
import {Observable, take} from "rxjs";
import {UserComment} from "../../models/interfaces.model";
import {MatDialog} from '@angular/material/dialog';
import {ImageDisplayDialogComponent} from "../image-display-dialog/image-display-dialog.component";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input() data: UserComment | undefined;

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  displayImage(selectedImage: string) {
    this.dialog.open(ImageDisplayDialogComponent, {
      data: selectedImage
    });
  }
}
