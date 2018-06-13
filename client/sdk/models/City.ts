/* tslint:disable */
import {
  Country
} from '../index';

declare var Object: any;
export interface CityInterface {
  "name": string;
  "code"?: number;
  "CountryId": number;
  "id"?: number;
  country?: Country;
}

export class City implements CityInterface {
  "name": string;
  "code": number;
  "CountryId": number;
  "id": number;
  country: Country;
  constructor(data?: CityInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `City`.
   */
  public static getModelName() {
    return "City";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of City for dynamic purposes.
  **/
  public static factory(data: CityInterface): City{
    return new City(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'City',
      plural: 'Cities',
      path: 'Cities',
      idName: 'id',
      properties: {
        "name": {
          name: 'name',
          type: 'string'
        },
        "code": {
          name: 'code',
          type: 'number'
        },
        "CountryId": {
          name: 'CountryId',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        country: {
          name: 'country',
          type: 'Country',
          model: 'Country',
          relationType: 'belongsTo',
                  keyFrom: 'CountryId',
          keyTo: 'id'
        },
      }
    }
  }
}
