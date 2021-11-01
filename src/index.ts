import "reflect-metadata";
import { appContainer } from "./inversify.config";
import { CompositeProducer } from "./producer/composite-producer";
import { COMPOSITE_TYPES } from "./producer/producer-types";
// import { WeaponManager } from "./classes/weaponManager";

// const weaponManager = appContainer.get<WeaponManager>(WeaponManager);

// console.log(weaponManager.getWeapons());

const compositeProducer = appContainer.get<CompositeProducer>(
  COMPOSITE_TYPES.CompositeProducer
);
console.log(compositeProducer);
