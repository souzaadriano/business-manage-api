import { RestModule } from '@/modules/rest/rest.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [RestModule],
  providers: [],
  controllers: [],
  exports: [],
})
export class ProductModule {}
