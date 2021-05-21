import { TipoTransacao } from "../enums/TipoTransacao";

export interface ITransactionGrid {
  _id: number;
  datetime: Date;
  type: TipoTransacao;
  destinyAccount: string;
  value: number;
}
