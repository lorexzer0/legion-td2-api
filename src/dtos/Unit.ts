import { LegionTD2Api } from '..';
import { UnitResponsePartial } from '../types/response';

export class UnitDTO {
  constructor(
    private unitData: UnitResponsePartial,
  ) {}

  // WAVE OF GETTERS OH GOD (if i set them dynamically i lose intellisense)
  public get id() {
    return this.unitData.id
  }
  
  public get name() {
    return this.unitData.name
  }
  
  public get legion() {
    return this.unitData.legion
  }
  
  public get description() {
    return this.unitData.description
  }
  
  public get tooltip() {
    return this.unitData.tooltip
  }
  
  public get iconPath() {
    return this.unitData.iconPath
  }
  
  public get armorType() {
    return this.unitData.armorType
  }
  
  public get attackType() {
    return this.unitData.attackType
  }
  
  public get attackSpeed() {
    return this.unitData.attackSpeed
  }
  
  public get range() {
    return this.unitData.range
  }
  
  public get attackMode() {
    return this.unitData.attackMode
  }
  
  public get moveSpeed() {
    return this.unitData.moveSpeed
  }
  
  public get moveSpeedDescription() {
    return this.unitData.moveSpeedDescription
  }
  
  public get moveType() {
    return this.unitData.moveType
  }
  
  public get upgradesTo() {
    return this.unitData.upgradesTo
  }
  
  public get goldCost() {
    return this.unitData.goldCost
  }
  
  public get mythiumCost() {
    return this.unitData.mythiumCost
  }
  
  public get totalValue() {
    return this.unitData.totalValue
  }
  
  public get dps() {
    return this.unitData.dps
  }
  
  public get hp() {
    return this.unitData.hp
  }
  
  public get abilities() {
    return this.unitData.abilities
  }
  
  public get mana() {
    return this.unitData.mana
  }
  
  public get income() {
    return this.unitData.income
  }
  
  public get bounty() {
    return this.unitData.bounty
  }
}
