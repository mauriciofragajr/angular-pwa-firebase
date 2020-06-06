import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, public auth: AngularFireAuth) {
    this.auth.authState.subscribe(user => console.log('user', user));
  }

  public get user() {
    return this.auth.user
  }

  loginGoogle() {
    this.auth.signInWithPopup(new auth.GoogleAuthProvider())
      .then(data => {
        console.log('logado com google', data.user);
        this.router.navigate(['/'])
      })
      .catch(err => console.log(err))
  }

  logout() {
    this.auth.signOut();
  }

}
