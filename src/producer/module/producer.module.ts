import { COMPOSITE_TAG } from "./../producer-types";
import { DefaultProducer } from "./../default-producer";
import { ProtoProducer } from "./../proto-producer";
import { IProducer } from "./../producer-interfaces";
import { ContainerModule, interfaces } from "inversify";
import { COMPOSITE_TYPES } from "../producer-types";

export const ProducerModule = new ContainerModule((bind: interfaces.Bind) => {
  bind<IProducer>(COMPOSITE_TYPES.IProducer)
    .toDynamicValue((context: interfaces.Context) => {
      console.log("special called");
      return new ProtoProducer("protoProducer");
    })
    .whenTargetNamed(COMPOSITE_TAG.specialTag);
  bind<IProducer>(COMPOSITE_TYPES.IProducer)
    .toDynamicValue((context: interfaces.Context) => {
      console.log("default called");
      return new DefaultProducer("jsonProducer");
    })
    .whenTargetIsDefault();
});
