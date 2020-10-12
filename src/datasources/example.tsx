import { API } from '../utilities/API';

export class BankDatasource {
  static getBankList() {
    return API.get(
      'https://dev-kidtang.billme.co.th/services',
      // api path
      `/api/constant/payable_channels`
      //api end point 
    );
  }
}