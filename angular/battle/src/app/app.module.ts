import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ModerateurComponent } from './moderateur/moderateur.component';
import { VoteComponent } from './vote/vote.component';
import { SetupvoteComponent } from './casting/setupvote/setupvote.component';
import { Routes, RouterModule } from '@angular/router';
import { CastingComponent } from './casting/casting.component';
import { SetupcastingComponent } from './casting/setupcasting/setupcasting.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "moderateur", component: ModerateurComponent},
  {path: "vote", component: VoteComponent},
  {path: "casting", component: CastingComponent},
  {path: "casting/setup-vote", component: SetupvoteComponent},
  {path: "casting/setup-casting", component: SetupcastingComponent},
  {path: "", component: AppComponent},
  {path: "not-found", component: FourOhFourComponent},
  {path: "**", redirectTo: "/not-found"}
];

@NgModule({
  declarations: [
    AppComponent,
    ModerateurComponent,
    VoteComponent,
    CastingComponent,
    SetupvoteComponent,
    SetupcastingComponent,
    FourOhFourComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
