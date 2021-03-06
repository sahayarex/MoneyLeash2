import {Page, NavController, Alert, ViewController} from 'ionic-angular';
import {AuthService} from '../../../providers/auth-service';

@Page({
  templateUrl: 'build/pages/myinfo/changeemail/changeemail.html'
})

export class ChangeEmailPage { 
  user: {
    email?: string,
    password?: string
  } = {};
        
  constructor(
      private nav: NavController,
      private viewCtrl: ViewController, 
      private auth: AuthService) {}
  
  changeEmail(user) {
    this.dismiss(user);
  }
  
  dismiss(data) {
    this.viewCtrl.dismiss(data);
  }
    
}