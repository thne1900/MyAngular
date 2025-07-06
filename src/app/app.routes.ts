import { Routes } from '@angular/router';
import { StartComponent } from './start/start.component';
import { ConvertComponent } from './convert/convert.component';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
{path: "start", component: StartComponent},
{path: "convert", component: ConvertComponent},
{path: "about", component:AboutComponent},
{path: "", redirectTo: "/start", pathMatch: "full"},
{path: "404", component: NotfoundComponent},
{path: "**", component: NotfoundComponent}

];
