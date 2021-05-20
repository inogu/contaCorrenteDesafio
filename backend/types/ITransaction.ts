import { TipoTransacao } from "../enums/TipoTransacao";

export interface ITransaction {
  _id: number;
  datetime: Date;
  type: TipoTransacao;
  destinyAccount: string;
  value: number;
}
