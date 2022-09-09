import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth/auth.service';
import { RequestService } from './http/request.service';
import { PersistenceService, STORAGE } from './services/persistence.service';
import { AuthGuard } from './guards/auth.guard';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    AuthService,
    RequestService,
    PersistenceService,
    AuthGuard
    // { provide: STORAGE, useFactory: () => sessionStorage}
  ]
})
export class CoreModule { }
