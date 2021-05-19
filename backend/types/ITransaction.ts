export interface ITransaction {
  _id: number;
  datetime: Date;
  type: string;
  destinyAccount: string;
  value: number;
}
