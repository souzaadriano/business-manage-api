import { TJsonDocument } from '@/core/shared/types/json-document.type';
import { IsBetwwen } from '@/core/shared/validators/between/is-between.validator';
import { HttpStatus } from '@nestjs/common';

export class RestResponseDTO<T extends TJsonDocument = any> {
  private static _successRange = new IsBetwwen({ begin: 200, end: 300 });
  constructor(private readonly _properties: TConstructor<T>) {}

  get output() {
    const { metadata, output } = this._properties;
    return this.isSuccess ? output : { ...output, _metadata: metadata };
  }

  get status() {
    return this._properties.status;
  }

  private get isSuccess(): boolean {
    return RestResponseDTO._successRange.validate(this._properties.status);
  }
}

type TConstructor<T extends TJsonDocument> = {
  status: HttpStatus;
  output: TJsonDocument;
  metadata: T;
};
