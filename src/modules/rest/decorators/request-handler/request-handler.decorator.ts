import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { ClassConstructor } from 'class-transformer';
import { RestHandler } from '../../rest-hanlder.class';
import { createInput } from './create-input';

export const RequestHandler = createParamDecorator(async (Schema: ClassConstructor<any>, ctx: ExecutionContext) => {
  const httpContext = ctx.switchToHttp();
  const request = httpContext.getRequest();
  const response = httpContext.getResponse();
  const input = await createInput(request, Schema);
  request['input'] = input;

  return new RestHandler(request, response);
});
