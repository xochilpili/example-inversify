import { injectable, multiInject } from "inversify";
import { ICompositeProducer, IProducer } from "./producer-interfaces";
import { COMPOSITE_TYPES } from "./producer-types";

@injectable()
export class CompositeProducer implements ICompositeProducer {
  public specialProducer: IProducer;
  public protoProducer: IProducer;

  constructor(@multiInject(COMPOSITE_TYPES.IProducer) producers: IProducer[]) {
    this.specialProducer = producers[0];
    this.protoProducer = producers[1];
  }
}
