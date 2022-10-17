import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { IconsService } from 'src/app/services/icons.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  appService: AppService;
  iconService: IconsService

  menuItems: any = []

  constructor(appService: AppService, iconService: IconsService) {
    this.appService = appService;
    this.iconService = iconService;

    this.menuItems = [
      { path: "#", title: "My Job Feed", icon: iconService.icons.briefcase, notifications: { has: false, count: null }, isActive: false },
      { path: "#", title: "Discover Jobs", icon: iconService.icons.magnifyingGlass, notifications: { has: false, count: null }, isActive: false },
      { path: "#", title: "Saved Jobs", icon: iconService.icons.bookmark, notifications: { has: true, count: "26+" }, isActive: false },
      { path: "#", title: "Proposal", icon: iconService.icons.envelope, notifications: { has: false, count: null }, isActive: false },
      { path: "#", title: "All Contracts", icon: iconService.icons.fileContract, notifications: { has: true, count: "4+" }, isActive: false },
      { path: "/profile", title: "Profile", icon: iconService.icons.userCircle, notifications: { has: false, count: null }, isActive: true },
      { path: "#", title: "Transaction", icon: iconService.icons.sackDollar, notifications: { has: false, count: null }, isActive: false },
      { path: "#", title: "Reports", icon: iconService.icons.fileLines, notifications: { has: false, count: null }, isActive: false }
    ];
  }

  ngOnInit(): void {
  }

}
