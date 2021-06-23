import { Module } from '@nestjs/common';
import { AlphaService } from './alpha.service';

@Module({
  providers: [AlphaService],
  exports: [AlphaService],
})
export class AlphaModule {}
