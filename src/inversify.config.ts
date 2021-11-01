import { ProducerModule } from "./producer/module/producer.module";
import { ProtoProducer } from "./producer/proto-producer";
import { DefaultProducer } from "./producer/default-producer";
import { IProducer } from "./producer/producer-interfaces";
import { CompositeProducer } from "./producer/composite-producer";
import { Katana } from "./classes/Katana";
import { Types } from "./types/types";
import { Container, interfaces } from "inversify";
import { WeaponManager } from "./classes/weaponManager";
import { KatanaModule } from "./modules/katana.module";
import { COMPOSITE_TYPES } from "./producer/producer-types";

const appContainer = new Container({
  defaultScope: "Request",
  autoBindInjectable: true,
});

// appContainer.load(KatanaModule);
// appContainer.bind<Katana>(Types.Katana).to(Katana).inSingletonScope();
/* appContainer
  .bind<WeaponManager>(Types.WeaponManager)
  .to(WeaponManager)
  .inSingletonScope(); */

appContainer.load(ProducerModule);

appContainer
  .bind<CompositeProducer>("CompositeProducer")
  .to(CompositeProducer)
  .inSingletonScope();

/*

appContainer
  .bind<IProducer>(COMPOSITE_TYPES.IProducer)
  .toDynamicValue((ctx: interfaces.Context) => {
    return new DefaultProducer("defaultProducer from inversify");
  }).inSingletonScope();
appContainer
  .bind<IProducer>(COMPOSITE_TYPES.IProducer)
  .toDynamicValue((ctx: interfaces.Context) => {
    return new ProtoProducer("proto from inversify");
  }).inSingletonScope();

*/

export { appContainer };
