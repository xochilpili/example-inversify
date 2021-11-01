import { inject, injectable, named } from "inversify";
import { IWeaponManager } from "./../types/interfaces";
import { Katana } from "./Katana";
import { Types, Tag } from "../types/types";

@injectable()
export class WeaponManager implements IWeaponManager {
  constructor(
    @inject(Types.Katana) @named(Tag.specialTag) private katana: Katana,
    @inject(Types.Katana) private second: Katana
  ) {
    console.log("loaded kafkaManager");
  }

  getWeapons(): any {
    console.log("getWeapons", this.katana.getName());
    console.log("getWeapons 2: ", this.second.getName());
  }
}
