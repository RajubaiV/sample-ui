import { Routes } from '@angular/router';
import { IcegatelistComponent } from './pages/icegatelist/icegatelist.component';

export const routes: Routes = [
    { path: '', component: IcegatelistComponent },
    { path: 'list', component: IcegatelistComponent}
];
