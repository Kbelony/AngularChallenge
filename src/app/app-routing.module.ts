import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDonkeyComponent } from './create-donkey/create-donkey.component';
import { ListDonkeyComponent } from './list-donkey/list-donkey.component';
import { MyFormComponent } from './my-form/my-form.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [{path: "sign-up", component:SignUpComponent },{path: "user-profile", component:UserProfileComponent },{path: "create", component:CreateDonkeyComponent },{path: "list-donkey", component:ListDonkeyComponent },{path: "my-form", component:MyFormComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
