import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatCardModule,
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatCardModule,
  ],
})
export class MaterialModule {}
