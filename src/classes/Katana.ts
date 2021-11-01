import { injectable } from "inversify";
import { IWeapon } from "../types/interfaces";

@injectable()
export class Katana implements IWeapon {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }
}
