import { API } from '../utilities/API';

export class ExampleDatasource {
  static getExampleData() {
    return API.get(
      'https://dev-kidtang.billme.co.th/services',
      // api path
      `/api/constant/payable_channels`
      //api end point 
    );
  }
}