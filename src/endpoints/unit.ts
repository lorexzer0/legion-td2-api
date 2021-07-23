import { RequestInitiator } from '../requestInitiator';
import * as gql from 'gql-query-builder';
import { APIResponse, FilteredUnitsResponse, UnitResponse } from '../types/response';
import { UnitDTO } from '../dtos/Unit';

const unitFields: (string | { [key: string]: string[] })[] = [
  'id',
  'name',
  'legion',
  'description',
  'tooltip',
  'iconPath',
  'armorType',
  'attackType',
  'attackSpeed',
  'range',
  'attackMode',
  'moveSpeed',
  'moveSpeedDescription',
  'moveType',
  'upgradesTo',
  'goldCost',
  'mythiumCost',
  'totalValue',
  'dps',
  'hp',
  {
    abilities: [
      'id',
      'name',
      'description',
      'tooltip',
      'iconPath',
      'aoe',
      'bounces',
      'cooldown',
      'damage',
      'duration',
    ],
  },
  'mana',
  'income',
  'bounty',
];

export class UnitsEndpoint extends RequestInitiator {
  public async getByLegion(
    legion:
      | 'Mech'
      | 'Forsaken'
      | 'Grove'
      | 'Element'
      | 'Creature'
      | 'Mercenary'
      | 'Atlantean'
      | 'Nomad'
      | 'Shrine'
      | 'Divine',
  ): Promise<UnitDTO[]> {
    const query = gql.query({
      variables: {
        legion: {
          value: legion,
          type: 'Legion',
        },
      },
      operation: 'filteredUnits',
      fields: [
        {
          units: unitFields,
        },
      ],
    });

    const response = (await this._query<APIResponse<FilteredUnitsResponse>>(query)).data.filteredUnits;

    return response.units.map((unit) => {
      return new UnitDTO(unit);
    });
  }

  public async getByName(name: string): Promise<UnitDTO> {
    const query = gql.query({
      variables: {
        name,
      },
      operation: 'unit',
      fields: unitFields,
    });

    const response = (await this._query<APIResponse<UnitResponse>>(query)).data.unit;
    return new UnitDTO(response);
  }

  public async getById(id: string): Promise<UnitDTO> {
    const query = gql.query({
      variables: {
        id,
      },
      operation: 'unit',
      fields: unitFields,
    });

    const response = (await this._query<APIResponse<UnitResponse>>(query)).data.unit;
    return new UnitDTO(response);
  }
}
