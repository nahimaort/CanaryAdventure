import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-image-display-dialog',
  templateUrl: './image-display-dialog.component.html',
  styleUrls: ['./image-display-dialog.component.css']
})
export class ImageDisplayDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: string) { }

  ngOnInit(): void {
  }

}
