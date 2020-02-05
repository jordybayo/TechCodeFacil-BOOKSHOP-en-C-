import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = "Battle Dance Show"

  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotoVotePage() {
    this.router.navigateByUrl("casting/setup-vote").then(e => {
      if (e) {
        console.log("Navigation is successful!");
      } else {
        console.log("Navigation has failed!");
      }
    });
  }

  gotoCastingPage() {
    this.router.navigateByUrl("casting/setup-casting").then(e => {
      if (e) {
        console.log("Navigation is successful!");
      } else {
        console.log("Navigation has failed!");
      }
    });
  }

  gotoModerateurPage() {
    this.router.navigate("moderateur").then(e => {
      if (e) {
        console.log("Navigation is successful!");
      } else {
        console.log("Navigation has failed!");
      }
    });
  }

}
