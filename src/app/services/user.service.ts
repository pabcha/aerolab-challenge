import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { GET_USER_URL, OPTIONS, POST_POINTS_URL, GET_REDEEM_URL } from "../config/api-rest";
import { User } from './../interfaces/User';
import { BehaviorSubject, Observable } from "rxjs";
import { Redeem } from "../interfaces/Redeem";

const DEFAULT_STATE = {
  id: '',
  name: '--',
  points: 0,
  redeemHistory: [],
  createDate: ''
}

@Injectable({ providedIn: 'root' })
export class UserService {
  private _store: User;
  private _userSubject = new BehaviorSubject<User>(DEFAULT_STATE);
  user$: Observable<User> = this._userSubject.asObservable();
  loading$ = new BehaviorSubject<boolean>(true);

  constructor(private _http: HttpClient) {
    this.loadUser();
  }

  loadUser() {
    this.loading$.next(true);

    this._http
      .get<User>(GET_USER_URL, OPTIONS)
      .subscribe((user) => {
        this._store = user;
        this.loading$.next(false);
        this._userSubject.next(user);
      });
  }

  addPoints(amount) {
    this.loading$.next(true);
    return this._http.post(POST_POINTS_URL, { amount }, OPTIONS);
  }

  loadRedeemHistory() {
    return this._http.get<Redeem[]>(GET_REDEEM_URL, OPTIONS);
  }
}
