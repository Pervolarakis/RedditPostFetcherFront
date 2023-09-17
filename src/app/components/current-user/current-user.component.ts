import { Component } from '@angular/core';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-current-user',
  templateUrl: './current-user.component.html',
  styleUrls: ['./current-user.component.css']
})
export class CurrentUserComponent {
  currentUser: string|null = null;
  faArrowRightFromBracket = faArrowRightFromBracket;

  constructor(private authService: AuthService){}

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();
  }

  logOutUser(): void{
    this.authService.logOutUser();
  }
}
