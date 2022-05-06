import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {CommentSectionComponent} from "../comment-section/comment-section.component";

@Component({
  selector: 'app-sign-in-dialog',
  templateUrl: './sign-in-dialog.component.html',
  styleUrls: ['./sign-in-dialog.component.css']
})
export class SignInDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public parent: CommentSectionComponent) { }

  ngOnInit(): void {
  }

}
