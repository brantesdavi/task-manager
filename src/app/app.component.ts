import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarModule } from './components/sidebar/sidebar.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconsModule } from './icons/icons.module';
import { UsersModule } from './pages/users/users.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SidebarModule,
    FontAwesomeModule,
    IconsModule,

    UsersModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'task-manager';
}
