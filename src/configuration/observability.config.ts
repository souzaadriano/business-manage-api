import { Environment } from 'environment-variables-decorator';

export class ObservabilityConfig {
  @Environment('OBSERVABILITY_METRICS_PORT', 7001)
  metricsPort: number;
}
