import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from './button/button.component';
import { LogoIconComponent } from './logo-icon/logo-icon.component';
import { HeadingDividerComponent } from './heading-divider/heading-divider.component';



@NgModule({
  declarations: [ButtonComponent, LogoIconComponent, HeadingDividerComponent],
  imports: [
    CommonModule
  ],
  exports: [ButtonComponent, LogoIconComponent, HeadingDividerComponent]
})
export class SharedModule { }
