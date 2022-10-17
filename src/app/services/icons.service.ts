import { Injectable } from '@angular/core';
import { faBars, faBasketballBall, faBell, faBookmark, faBriefcase, faCircleCheck, faClock, faClose, faEllipsis, faEnvelope, faFileContract, faFileLines, faLocationDot, faMagnifyingGlass, faPlus, faSackDollar, faTrophy, faUserCircle } from '@fortawesome/free-solid-svg-icons';

@Injectable({
  providedIn: 'root'
})
export class IconsService {

  icons = {
    bars: faBars,
    close: faClose,
    briefcase: faBriefcase, 
    magnifyingGlass: faMagnifyingGlass, 
    bookmark: faBookmark, 
    envelope: faEnvelope, 
    fileContract: faFileContract, 
    userCircle: faUserCircle, 
    sackDollar: faSackDollar, 
    fileLines: faFileLines,
    ellipsis: faEllipsis,
    bell: faBell,
    locationDot: faLocationDot,
    basketballBall: faBasketballBall,
    clock: faClock,
    trophy: faTrophy,
    plus: faPlus,
    circleCheck: faCircleCheck
  }

  constructor() { }
}
