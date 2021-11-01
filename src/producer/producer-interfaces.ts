export interface IProducer {
  name: string;
}

export interface ICompositeProducer {
  specialProducer: IProducer;
  protoProducer: IProducer;
}
