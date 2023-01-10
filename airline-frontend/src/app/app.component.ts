import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import content from "./translation.json";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pageContent = content["en"];
  airports = [
    {
      id: 1,
      name: "Varna"
    },
    {
      id: 2,
      name: "Vienna"
    }
  ];
  fromAirport = this.airports;
  toAirport = this.airports;
  flightSearch: FormGroup = new FormGroup({
    fromAirport: new FormControl("Test"),
    toAirport: new FormControl(),
    fromDate: new FormControl(null),
    toDate: new FormControl(null),
    numberOfPassengers: new FormControl(null)
  });

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.flightSearch.get("fromAirport")?.setValue(1)
    this.flightSearch.get("toAirport")?.setValue(2)
  }

  public getFlights() {
    const search = {
      fromAirport: this.flightSearch.get("fromAirport")?.value,
      toAirport: this.flightSearch.get("toAirport")?.value,
      fromDate: this.flightSearch.get("fromDate")?.value,
      toDate: this.flightSearch.get("toDate")?.value,
    }
    console.log({ search });
  }
}
