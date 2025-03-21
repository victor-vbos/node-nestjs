import { Controller, Get } from '@nestjs/common';
import { HealthCheck, HealthCheckService, MongooseHealthIndicator } from '@nestjs/terminus/dist';

@Controller('health')
export class HealthController {
    constructor(
        private health: HealthCheckService,
        private db: MongooseHealthIndicator
    ) {}

    @Get()
    @HealthCheck()
    check() {
      return this.health.check([
        () => this.db.pingCheck('mongodb'),
      ]);
    }
}
