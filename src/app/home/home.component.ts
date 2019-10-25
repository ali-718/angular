import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  constructor() {}

  clickCounter = 0;

  public name = "Ali Haider";

  counterClick(event) {
    console.log(event);
    this.clickCounter += 1;
  }

  names = ["ali", "faraz", "fahad", "shahnawaz", "khurram"];

  disabled = false;

  myId = "testID";

  ngOnInit() {}
}
