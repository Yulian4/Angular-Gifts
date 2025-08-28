import { Routes } from '@angular/router';
import { Stickers } from './component/stickers/stickers';
import {Home} from './component/home/home'
export const routes: Routes = [

    { path: 'stickers', component: Stickers },
    {path: 'home', component: Home}
];
