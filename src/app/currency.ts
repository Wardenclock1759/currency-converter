export class Currency {
  code: string;
  _value: number;
  prev: number;
  _change: number;

  constructor() {
    this.code = '';
    this._value = 0;
    this.prev = 0;
    this._change = 0;
  }

  public get value() {
    return this._value;
  }

  public set value(newValue: number) {
    newValue === 0 ? this._value = 0 : this._value = 1 / newValue;
    this._value = Math.round(this._value * 100) / 100;
    this.prev === 0 ? this._change = 0 : this._change = this.prev - this._value;
  }

  public get change() : string {
    if (this._change === 0) {
      return '(0.00)';
    } else if (this._change > 0) {
      return `(+${this._change})`;
    } else {
      return `(${this._change})`;
    }
  }
}
