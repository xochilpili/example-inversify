import { ContainerModule, interfaces } from "inversify";
import { Types, Tag } from "../types/types";
import { Katana } from "../classes/Katana";

export const KatanaModule = new ContainerModule((bind: interfaces.Bind) => {
  // make katana injectable

  // decorate(injectable(), Katana);
  // injected ?
  // decorate(inject(Types.Katana), Katana, 0);
  bind<Katana>(Types.Katana)
    .toDynamicValue((context: interfaces.Context) => {
      console.log("special called");
      return new Katana("binded!");
    })
    .whenTargetNamed(Tag.specialTag);
  bind<Katana>(Types.Katana)
    .toDynamicValue((context: interfaces.Context) => {
      console.log("default called", context.plan.rootRequest.target);
      return new Katana("default");
    })
    .whenTargetIsDefault();
  // bind<Katana>(Types.Katana).to(Katana).inSingletonScope();
});
