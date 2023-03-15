import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { BiodataModule } from './biodata/biodata.module';

@Module({
  imports: [PrismaModule, BiodataModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
