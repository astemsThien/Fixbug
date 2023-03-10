/*
 * Copyright (c) 2021 JFLab All rights reserved.
 * File Name : appconstants.ts
 * Author : jbh5310
 * Lastupdate : 2021-10-03 12:46:57
 */

import {environment} from '../../../environments/environment';
import {APPCONSTANTS} from './appconstants';

export class COMMONINITDATA {
  public static TENANT = '1000';
  public static USERTYPE_ADMIN = 'ADMIN';

  public static DEFAULT_COMPOPTS = {
    dxForm: {
      showColonAfterLabel: false,
      minColWidth: 300
    },
    dxButton: {
      icon: 'check',
      type: 'default'
    }
  };

  public static DEFAULT_FORM_OPT = {
    class: 'search-form-box',
    showColonAfterLabel: false,
    minColWidth: 300
  };

  /* http */
  public static DEFAULT_POST_API_ERROR = {
    success: false,
    data: null,
    code: '-999',
    msg: 'Post service api error!'
  };

  public static COMMON_RESPONSE_DATA = {
    success: {code: 0, msg: 'common.msg.success'},
    fail: {code: -1, msg: 'common.msg.fail'},
  };

  public static FLAG_TRUE = 'Y';
  public static FLAG_FALSE = 'N';

  public static TRAN_TRANPOINTTYPE = {
    STARTPOINT: 'S', S: 'startPoint',
    WAYPOINT: 'W',   W: 'wayPoint',
    ENDPOINT: 'E',   E: 'endPoint'
  };

  public static TRAN_ADDRESSTYPE = {
    JIBUNADDRESS: 'J',
    ROADADDRESS: 'R'
  };

  public static TRAN_SIDEFORMTYPE = {
    DELIVERY: 'delivery',
    ITEM: 'item',
    CAR: 'car'
  };

  public static TRAN_MAPDATA = {

    ROUTE: {
      appKey: APPCONSTANTS.T_MAP_API_KEY,
      reqCoordType: 'WGS84GEO',
      resCoordType: 'EPSG3857',
      angle: '172',
      trafficInfo: 'Y',
      truckType: '1',
      truckWidth: '100',
      truckHeight: '100',
      truckWeight: '35000',
      truckTotalWeight: '35000',
      truckLength: '200'
    }
  };

  public static MASTERSERVICE = 'master-service';

  public static DEFAULT_PHONE_MASK = '00000000000';
  public static DEFAULT_TEL_MASK = '00000000000';
  public static PHONE_RULES = { X: /[02-9]/ };
  public static VALIDATOR = 'validator';

  public static BTN_CLASS = 'dx-widget dx-button dx-button-mode-contained dx-button-form dx-button-has-text';
  public static BTN_CLASS_DSA = 'dx-widget dx-button dx-button-mode-contained dx-button-form dx-button-has-text dx-state-disabled';

  public static EXCELHEADER = {
    'admin.tranordmass.tranordgroup': 'tranOrdGroup', // ????????????
    'admin.tranordmass.tranpointseq': 'tranPointSeq', // ?????? tranPointSeq
    'admin.tranordmass.trantype': 'tranType',         // ????????????
    'admin.tranordmass.tranorddate1': 'tranOrdDate1', // ????????????
    'admin.tranordmass.tranorddate2': 'tranOrdDate2', // ????????????
    'admin.tranordmass.companynm': 'companyNm', // ?????????
    'admin.tranordmass.address1': 'address1',  // ??????1
    // 'admin.tranordmass.address2': 'address2',  // ??????2 2022-11-04 ??????
    'admin.tranordmass.refnm': 'refNm',       // ?????????
    'admin.tranordmass.reftellno': 'refTellNo', // ?????????

    'admin.tranordmass.remarks': 'remarks', // ????????????
    'admin.tranordmass.tranordcategory': 'tranOrdCategory', // ????????????
    'admin.tranordmass.trancartype': 'tranCarType', // ????????????
    'admin.tranordmass.trancarkind': 'tranCarKind', // ????????????
    'admin.tranordmass.trancarcnt': 'tranCarCnt', // ????????????
    // 'admin.tranordmass.tranitemoption': 'tranItemOption', // ???????????? 2022-11-04 ??????, ????????? ??????
    'admin.tranordmass.tranitemcategorynm': 'tranItemCategoryNm', // ???????????????
    'admin.tranordmass.tranitempacktype': 'tranItemPackType', // ??????????????????
    'admin.tranordmass.tranitemweight': 'tranItemWeight', // ????????????
    'admin.tranordmass.tranitemheight': 'tranItemHeight', // ????????????
    'admin.tranordmass.tranitemwidth': 'tranItemWidth', // ??????????????????
    'admin.tranordmass.tranitemlength': 'tranItemLength', // ??????????????????
    'admin.tranordmass.tranitemcbm': 'tranItemCbm', // ??????CBM
    'admin.tranordmass.tranitemamt': 'tranItemAmt', // ????????????
    'admin.tranordmass.tranordcompany': 'tranOrdCompany', // ????????? companyId
    'admin.tranordmass.transalestype': 'tranSalesType', // ????????????
    'admin.tranordmass.tranintervaltype': 'tranIntervalType' // ????????????
  };

  public static IMAGE_URL = 'https://concplay.blob.core.windows.net/allright/';
}
