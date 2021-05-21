import { TipoTransacao } from "../enums/TipoTransacao";

export interface ITransaction {
  datetime: Date;
  type: TipoTransacao;
  destinyAccount: string;
  value: number;
}
