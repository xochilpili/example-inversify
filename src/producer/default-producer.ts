import { injectable } from "inversify";
import { IProducer } from "./producer-interfaces";

@injectable()
export class DefaultProducer implements IProducer {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }
}
