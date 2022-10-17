import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/services/app.service';
import { IconsService } from 'src/app/services/icons.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profileDatas: any = {}
  profileID: string | null;
  iconService: IconsService;

  constructor(private appService: AppService, iconService: IconsService, private route: ActivatedRoute) {
    this.iconService = iconService;
    this.profileID = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.getProfileData(this.profileID);
  }

  getProfileData(profileID: string | null) {
    this.appService.getData(`/users/${profileID}`).subscribe({
      next: (data: any) => {
        console.log(data, "data");
        this.profileDatas = data;
      },
      error: (err: any) => {
        console.log(err, "err");
      }
    });
  }

}
