import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UsersComponent } from './users.component';

@NgModule({
  imports: [CommonModule],
  declarations: [UsersComponent],
  exports: [UsersComponent],
})
export class UsersModule {}
