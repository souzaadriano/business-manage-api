export class StopwatchStepsDTO {
  steps: TStopwatchSteps[] = [];
  lastStep = 'start';
  total = 0;

  setTotal(value: number) {
    this.total = this.total + value;
  }
}

type TStopwatchSteps = {
  from: string;
  to: string;
  elapsed: number;
};
