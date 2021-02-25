import { HomeComponent } from './sections/home/home.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProfileComponent } from './sections/profile/profile.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: '', component: HomeComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
