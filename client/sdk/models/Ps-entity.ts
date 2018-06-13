/* tslint:disable */

declare var Object: any;
export interface Ps-entityInterface {
  "name": string;
  "address"?: string;
  "id"?: number;
}

export class Ps-entity implements Ps-entityInterface {
  "name": string;
  "address": string;
  "id": number;
  constructor(data?: Ps-entityInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Ps-entity`.
   */
  public static getModelName() {
    return "Ps-entity";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Ps-entity for dynamic purposes.
  **/
  public static factory(data: Ps-entityInterface): Ps-entity{
    return new Ps-entity(data);
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
      name: 'Ps-entity',
      plural: 'Ps-entities',
      path: 'Ps-entities',
      idName: 'id',
      properties: {
        "name": {
          name: 'name',
          type: 'string'
        },
        "address": {
          name: 'address',
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
