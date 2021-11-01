import { IWeapon } from "./../types/interfaces";
import { injectable } from "inversify";

@injectable()
export class Machinegun implements IWeapon {
  public name: string;

  constructor() {
    this.name = "machineGun";
  }

  getName(): string {
    return this.name;
  }
}
