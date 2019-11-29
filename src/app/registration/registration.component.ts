import { Component, OnInit } from '@angular/core';
import {RequestsService} from '../servises/requests/requests.service';

import {User} from '../User';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public URL_PATH: string = 'https://4a516e44-8612-4758-a1f6-53939a75a17f.mock.pstmn.io/json';
  public visible: boolean = false;
  public myObject: string;
  public user: User;
  constructor(private request: RequestsService) { }

  ngOnInit() {

  }

  private click(event: Event){
    this.visible = !this.visible;
    this.request.get(this.URL_PATH).subscribe((value:User) => {
      this.user = value;
    });
  }

}
