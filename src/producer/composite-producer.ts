import { ProtoProducer } from "./proto-producer";
import { DefaultProducer } from "./default-producer";
import { inject, injectable, multiInject, named } from "inversify";
import { ICompositeProducer, IProducer } from "./producer-interfaces";
import { COMPOSITE_TAG, COMPOSITE_TYPES } from "./producer-types";

@injectable()
export class CompositeProducer implements ICompositeProducer {
  public defaultProducer: IProducer;
  public protoProducer: IProducer;

  constructor(
    @inject(COMPOSITE_TYPES.IProducer) prod: DefaultProducer,
    @inject(COMPOSITE_TYPES.IProducer)
    @named(COMPOSITE_TAG.specialTag)
    proto: ProtoProducer
  ) {
    this.defaultProducer = prod;
    this.protoProducer = proto;
  }
}
