import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {DatabaseService} from "../../services/database.service";
import {Router} from "@angular/router";

@Component({
  selector: 'island-page',
  templateUrl: './island.component.html',
  styleUrls: ['./island.component.css']
})
export class IslandComponent {
  islandDescription: Observable<any[]> | undefined;
  islandWhatToDo: Observable<any[]> | undefined;
  islandWhereToStay: Observable<any[]> | undefined;
  islandHowToGetThereDescription: Observable<any[]> | undefined;
  islandHowToGetThereContent: Observable<any[]> | undefined;

  constructor(private service: DatabaseService, router: Router) {
    this.getIslandInfo(service, router);
  }

  getIslandInfo(service: DatabaseService, router: Router) {
    switch (router.url) {
      case '/lanzarote': {
        let basePath = "/LanzarotePage/LanzaroteCollection";
        this.islandDescription = service.getCollection(basePath + "/LanzaroteDescription");
        this.islandWhatToDo = service.getCollection(basePath + "/LanzaroteWhatToDo");
        this.islandWhereToStay = service.getCollection(basePath + "/LanzaroteWhereToStay");
        this.islandHowToGetThereDescription = service.getCollection(basePath + "/LanzaroteHowToGetThereDescription");
        this.islandHowToGetThereContent = service.getCollection(basePath + "/LanzaroteHowToGetThereContent");
        break;
      }

      case '/gran-canaria': {
        let basePath = "/GranCanariaPage/GranCanariaCollection";
        this.islandDescription = service.getCollection(basePath + "/GranCanariaDescription");
        this.islandWhatToDo = service.getCollection(basePath + "/GranCanariaWhatToDo");
        this.islandWhereToStay = service.getCollection(basePath + "/GranCanariaWhereToStay");
        this.islandHowToGetThereDescription = service.getCollection(basePath + "/GranCanariaHowToGetThereDescription");
        this.islandHowToGetThereContent = service.getCollection(basePath + "/GranCanariaHowToGetThereContent");
        break;
      }

      case '/tenerife': {
        let basePath = "/TenerifePage/TenerifeCollection";
        this.islandDescription = service.getCollection(basePath + "/TenerifeDescription");
        this.islandWhatToDo = service.getCollection(basePath + "/TenerifeWhatToDo");
        this.islandWhereToStay = service.getCollection(basePath + "/TenerifeWhereToStay");
        this.islandHowToGetThereDescription = service.getCollection(basePath + "/TenerifeHowToGetThereDescription");
        this.islandHowToGetThereContent = service.getCollection(basePath + "/TenerifeHowToGetThereContent");
        break;
      }

      case '/fuerteventura': {
        let basePath = "/FuerteventuraPage/FuerteventuraCollection";
        this.islandDescription = service.getCollection(basePath + "/FuerteventuraDescription");
        this.islandWhatToDo = service.getCollection(basePath + "/FuerteventuraWhatToDo");
        this.islandWhereToStay = service.getCollection(basePath + "/FuerteventuraWhereToStay");
        this.islandHowToGetThereDescription = service.getCollection(basePath + "/FuerteventuraHowToGetThereDescription");
        this.islandHowToGetThereContent = service.getCollection(basePath + "/FuerteventuraHowToGetThereContent");
        break;
      }

      case '/la-palma': {
        let basePath = "/LaPalmaPage/LaPalmaCollection";
        this.islandDescription = service.getCollection(basePath + "/LaPalmaDescription");
        this.islandWhatToDo = service.getCollection(basePath + "/LaPalmaWhatToDo");
        this.islandWhereToStay = service.getCollection(basePath + "/LaPalmaWhereToStay");
        this.islandHowToGetThereDescription = service.getCollection(basePath + "/LaPalmaHowToGetThereDescription");
        this.islandHowToGetThereContent = service.getCollection(basePath + "/LaPalmaHowToGetThereContent");
        break;
      }

      case '/la-graciosa': {
        let basePath = "/LaGraciosaPage/LaGraciosaCollection";
        this.islandDescription = service.getCollection(basePath + "/LaGraciosaDescription");
        this.islandWhatToDo = service.getCollection(basePath + "/LaGraciosaWhatToDo");
        this.islandWhereToStay = service.getCollection(basePath + "/LaGraciosaWhereToStay");
        this.islandHowToGetThereDescription = service.getCollection(basePath + "/LaGraciosaHowToGetThereDescription");
        this.islandHowToGetThereContent = service.getCollection(basePath + "/LaGraciosaHowToGetThereContent");
        break;
      }

      case '/el-hierro': {
        let basePath = "/ElHierroPage/ElHierroCollection";
        this.islandDescription = service.getCollection(basePath + "/ElHierroDescription");
        this.islandWhatToDo = service.getCollection(basePath + "/ElHierroWhatToDo");
        this.islandWhereToStay = service.getCollection(basePath + "/ElHierroWhereToStay");
        this.islandHowToGetThereDescription = service.getCollection(basePath + "/ElHierroHowToGetThereDescription");
        this.islandHowToGetThereContent = service.getCollection(basePath + "/ElHierroHowToGetThereContent");
        break;
      }

      case '/la-gomera': {
        let basePath = "/LaGomeraPage/LaGomeraCollection";
        this.islandDescription = service.getCollection(basePath + "/LaGomeraDescription");
        this.islandWhatToDo = service.getCollection(basePath + "/LaGomeraWhatToDo");
        this.islandWhereToStay = service.getCollection(basePath + "/LaGomeraWhereToStay");
        this.islandHowToGetThereDescription = service.getCollection(basePath + "/LaGomeraHowToGetThereDescription");
        this.islandHowToGetThereContent = service.getCollection(basePath + "/LaGomeraHowToGetThereContent");
        break;
      }

    }
  }

}
