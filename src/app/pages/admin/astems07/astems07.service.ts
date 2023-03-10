import {Injectable} from '@angular/core';
import {APPCONSTANTS} from '../../../shared/constants/appconstants';
import {JHttpService} from '../../../shared/services/jhttp.service';
import {ApiResult} from '../../../shared/vo/api-result';


@Injectable({
  providedIn: 'root'
})
export class Astems07Service {

  httpUrl = `${APPCONSTANTS.BASE_URL_WM}/master-service/user`;

  constructor(private http: JHttpService) {
  }

  async get(searchData: {}): Promise<ApiResult<UserVO[]>> {
    const baseUrl = `${this.httpUrl}/findUser`;

    try {
      const result = await this.http.post<ApiResult<UserVO[]>>(baseUrl, searchData).toPromise();
      return result;
    } catch {
      return {
        success: false,
        data: null,
        code: '-999',
        msg: 'Post service api error!'
      };
    }
  }

  async getPopup(data: {}): Promise<ApiResult<UserVO>> {
    // Api 설정
    const baseUrl = `${this.httpUrl}/findUserFull`;

    try {
      // Post 방식으로 조회
      const result = await this.http.post<ApiResult<UserVO>>(baseUrl, data).toPromise();
      return result;
    } catch {
      return {
        success: false,
        data: null,
        code: '-999',
        msg: 'Post service api error!'
      };
    }
  }
  dsUserType = [
    {code: 'BEST', name: 'BEST'},
    {code: 'WORST', name: 'WORST'},
  ]
  data1 = [
    {code: '10층교육장', name: '10층교육장'},
    {code: '8층테스트', name: '8층테스트'},
    {code: 'ASTEMS교육장(매장)2', name: 'ASTEMS교육장(매장)2'},
    {code: '고객지원테스트01', name: '고객지원테스트01'},
    {code: '고객지원테스트02', name: '고객지원테스트02'},
  ];
  data2 = [
    {code: '0218', name: '0218'},
    {code: '0416대분류', name: '0416대분류'},
    {code: '0904교육대', name: '0904교육대'},
    {code: '1027대분류', name: '1027대분류'},
  ];
  data3 = [
    {code: '0904교육대', name: '0904교육대'},
    {code: '1027대분류', name: '1027대분류'},
  ];
  data4 = [
    {code: '0218', name: '0218'},
    {code: '0416대분류', name: '0416대분류'},
    {code: '1027대분류', name: '1027대분류'},
  ];

  async save(data: {}): Promise<ApiResult<UserVO>> {
    const baseUrl = `${this.httpUrl}/saveUser`;
    try {
      const result = await this.http.post<ApiResult<UserVO>>(baseUrl, data).toPromise();
      return result;
    } catch (e) {
      return {
        success: false,
        data: null,
        code: e.code,
        msg: e.msg
      };
    }
  }

  async update(data: {}): Promise<ApiResult<UserVO>> {
    const baseUrl = `${this.httpUrl}/updateUser`;
    try {
      const result = await this.http.post<ApiResult<UserVO>>(baseUrl, data).toPromise();
      return result;
    } catch (e) {
      return {
        success: false,
        data: null,
        code: e.code,
        msg: e.msg
      };
    }
  }

  async delete(data: {}): Promise<ApiResult<void>> {
    const baseUrl = `${this.httpUrl}/deleteUser`;
    try {
      const result = await this.http.post<ApiResult<void>>(baseUrl, data).toPromise();
      return result;
    } catch (e) {
      return {
        success: false,
        data: null,
        code: e.code,
        msg: e.msg
      };
    }
  }

  async updatePwd(data: {}): Promise<ApiResult<UserVO>> {
    const baseUrl = `${this.httpUrl}/updatePwd`;
    try {
      const result = await this.http.post<ApiResult<UserVO>>(baseUrl, data).toPromise();
      return result;
    } catch (e) {
      return {
        success: false,
        data: null,
        code: e.code,
        msg: e.msg
      };
    }
  }

  async resetPassword(data: {}): Promise<ApiResult<UserVO>> {
    const baseUrl = `${this.httpUrl}/resetPassword`;
    try {
      const result = await this.http.post<ApiResult<UserVO>>(baseUrl, data).toPromise();
      return result;
    } catch (e) {
      return {
        success: false,
        data: null,
        code: e.code,
        msg: e.msg
      };
    }
  }
}


export interface MenuSearchVO {
  radio1: string;
  radio2: string;
  name1: string;
  name2: string;
  name3: string;
  name4: string;
}


export interface UserVO {
  tenant: string;
  uid: number;
  usr: string;
  actFlg: string;
  name: string;
  shortName: string;
  userGroup: string;
  companyId: number;
  company: string;
  tel: string;
  email: string;

  userType: string;
  
}

