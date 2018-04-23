import { Component } from '@angular/core';
import {ProfileComponent} from './components/profile.component';
import {GithubService} from './services/github.service';
import {HttpModule} from '@angular/http';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers: [HttpModule, GithubService]
  // bootstrap: [HttpModule]
  // declarations: [ProfileComponent]
})
export class AppComponent  { }
