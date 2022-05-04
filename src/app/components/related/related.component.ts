import {Component, Input} from '@angular/core';
import {RetrieveService} from "../../services/retrieve.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-related',
  templateUrl: './related.component.html',
  styleUrls: ['./related.component.css']
})
export class RelatedComponent {
  related: Observable<any[]>;
  @Input() relatedType: string | undefined;

  constructor(private service: RetrieveService) {
    this.related = service.getCollection("/EventRelated");
  }

}
