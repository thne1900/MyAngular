import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MyAngular';

  //Logotype
  loggoPath:string="images/loggo.png";

  //Variables in the footer.
  course:string= "Programmering i TypeScript"
  schoolProgram:string="Webbutvecklingsprogrammet";
  schoolName:string= "thne1900";
  year:number= 2025;
  
}
