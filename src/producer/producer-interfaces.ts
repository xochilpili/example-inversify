export interface IProducer {
  name: string;
}

export interface ICompositeProducer {
  defaultProducer: IProducer;
  protoProducer: IProducer;
}
