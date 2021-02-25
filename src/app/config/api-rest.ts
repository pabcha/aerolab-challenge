import { HttpHeaders } from '@angular/common/http';
import { token } from '../config/token';

export const GET_PRODUCTS_URL ='https://coding-challenge-api.aerolab.co/products';
export const GET_USER_URL ='https://coding-challenge-api.aerolab.co/user/me';
export const GET_REDEEM_URL ='https://coding-challenge-api.aerolab.co/user/history';
export const POST_REDEEM_URL ='https://coding-challenge-api.aerolab.co/redeem';
export const POST_POINTS_URL = 'https://coding-challenge-api.aerolab.co/user/points';

export const OPTIONS = {
  headers: new HttpHeaders({
    Authorization: `Bearer ${token}`
  })
};
