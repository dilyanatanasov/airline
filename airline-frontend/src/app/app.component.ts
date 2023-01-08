import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  flight: any;
  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.httpClient.get("http://localhost:3000/landing").subscribe((res: any) => {
      this.flight = res.name;
    });
  }
}
