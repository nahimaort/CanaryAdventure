import { Component, OnInit } from '@angular/core';
import {DatabaseService} from "../../services/database.service";
import {Observable} from "rxjs";
import {UserComment} from "../../model/interfaces.model";
import {AuthService} from "../../services/auth.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatDialog} from "@angular/material/dialog";
import {ImageDisplayDialogComponent} from "../image-display-dialog/image-display-dialog.component";
import {SignInDialogComponent} from "../sign-in-dialog/sign-in-dialog.component";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../model/user.model";
import {StorageService} from "../../services/storage.service";
import {newArray} from "@angular/compiler/src/util";

@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.css']
})
export class CommentSectionComponent implements OnInit {
  commentsExample: Observable<UserComment[]>;
  loggedIn: boolean | undefined;
  buttonPressed: boolean | undefined;
  newComment: UserComment = new UserComment();
  commentForm = new FormGroup({
    title: new FormControl(this.newComment.title, [Validators.required, Validators.maxLength(50), Validators.minLength(5)]),
    content: new FormControl(this.newComment.content, [Validators.required, Validators.maxLength(200), Validators.minLength(5)]),
    images: new FormControl(this.newComment.images, Validators.required),
  });
  private imageName: any;
  formData = new FormData();
  private url: any;
  percentage: number = 0;
  uploadDone: boolean = false;

  constructor(private service: DatabaseService,
              public authService: AuthService,
              public snackBar: MatSnackBar,
              public dialog: MatDialog,
              public storageService: StorageService) {
    // @ts-ignore
    this.commentsExample = this.service.getCollection<UserComment>('CommentsExample');
    this.loggedIn = undefined;
    this.newComment.images = [];
  }

  ngOnInit(): void {
    this.buttonPressed = false;
  }

  openSnackBar(message: string, action:string) {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }

  openDialog() {
    this.dialog.open(SignInDialogComponent, {
      data: this,
    });
  }

  async isUserLoggedIn() {
      const user = await this.authService.isLoggedIn()
      if (user) {
        this.loggedIn = true;
        this.openSnackBar('You are logged in!', '');
      } else {
        this.loggedIn = false;
      }
  }

  public logWithGoogle() {
    this.authService.GoogleAuth().then(r => this.isUserLoggedIn());
  }

  public logWithFacebook() {
    this.authService.FacebookAuth().then(r => this.isUserLoggedIn());
  }

  public logWithTwitter() {
    this.authService.TwitterAuth().then(r => this.isUserLoggedIn());
  }

  get title() {
    return this.commentForm.get('title');
  }

  get content() {
    return this.commentForm.get('content');
  }

  get images() {
    return this.commentForm.get('images');
  }

  generateRandomId() {
    return Math.random().toString();
  }

  async uploadImage() {
    let image = this.formData.get('images');
    this.imageName = this.generateRandomId() + this.imageName;
    let upload = this.storageService.uploadToStorage(this.imageName, image);
    upload.percentageChanges()
    upload.percentageChanges().subscribe((percentage) => {
      this.percentage = Math.round(<number>percentage);
    });
    let reference = this.storageService.reference(this.imageName);
    await upload;
    this.uploadDone = true;
    reference.getDownloadURL().subscribe((url) => {
      this.url = url;
    });

    /*
    upload.percentageChanges().subscribe((percentage) => {
      this.percentage = Math.round(<number>percentage);
      if (this.percentage == 100) {
        this.uploadDone = true;
        reference.getDownloadURL().subscribe((url) =>
        {
          this.url = url;
        });
      }
    });
     */
  }

  async uploadComment() {
    this.newComment.images?.push(this.url);
    await this.service.uploadComment(this.newComment, 'CommentsExample');
    this.commentForm.reset();
    this.percentage = 0;
    this.openSnackBar('Comment published!', '');
  }

  // @ts-ignore
  imageUploaded(event) {
    if (event.target.files.length > 0) {
      for (let i = 0; i < event.target.files.length; i++) {
        this.imageName = event.target.files[i].name;
        this.formData.append('images', event.target.files[i], event.target.files[i].name)
      }
    }
    this.uploadImage();
  }
}
