/* tslint:disable */

declare var Object: any;
export interface CountryInterface {
  "name": string;
  "flag_url"?: string;
  "id"?: number;
}

export class Country implements CountryInterface {
  "name": string;
  "flag_url": string;
  "id": number;
  constructor(data?: CountryInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Country`.
   */
  public static getModelName() {
    return "Country";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Country for dynamic purposes.
  **/
  public static factory(data: CountryInterface): Country{
    return new Country(data);
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
      name: 'Country',
      plural: 'Countries',
      path: 'Countries',
      idName: 'id',
      properties: {
        "name": {
          name: 'name',
          type: 'string'
        },
        "flag_url": {
          name: 'flag_url',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
