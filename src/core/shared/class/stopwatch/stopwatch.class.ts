import { StopwatchStepsDTO } from './dtos/stopwatch-steps.dto';

export class Stopwatch {
  private readonly _steps: Map<string, number>;
  private _lastTimestamp: number;
  readonly name: string;
  private _stoped = false;

  constructor(name: string, steps: Map<string, number>) {
    this.name = name;
    this._steps = steps;
    this._lastTimestamp = Date.now();
  }

  static create(name: string) {
    return new Stopwatch(name, new Map());
  }

  step(label: string) {
    const elapsedTime = this._elapsedTime();
    this._steps.set(label, elapsedTime);
    return elapsedTime;
  }

  stop() {
    const elapsedTime = this._elapsedTime();
    this._stoped = true;
    this._steps.set('end', elapsedTime);
    return elapsedTime;
  }

  private _calculate() {
    return Array.from(this._steps.entries()).reduce((result, [label, value]) => {
      result.steps.push({ from: result.lastStep, to: label, elapsed: value });
      result.lastStep = label;
      result.total = value;
      return result;
    }, new StopwatchStepsDTO());
  }

  result() {
    if (this._stoped === false) this.stop();
    const result = this._calculate();
    return { total: result.total, steps: result.steps };
  }

  private _elapsedTime() {
    const currentTimestamp = Date.now();
    const elapsed = currentTimestamp - this._lastTimestamp;
    this._lastTimestamp = currentTimestamp;
    return elapsed;
  }
}
