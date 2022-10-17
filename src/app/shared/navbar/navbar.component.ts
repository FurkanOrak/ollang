import { Component, OnInit } from '@angular/core';
import { faMagnifyingGlass, faEllipsis, faBell, faBars } from '@fortawesome/free-solid-svg-icons';
import { AppService } from 'src/app/services/app.service';
import { IconsService } from 'src/app/services/icons.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  appService: AppService;
  iconService: IconsService;

  constructor(appService: AppService, iconService: IconsService) {
    this.appService = appService;
    this.iconService = iconService
  }

  ngOnInit(): void {
  }

}
