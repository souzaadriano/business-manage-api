import { AppConfig } from './app.config';
import { DatabaseConfig } from './database.config';
import { LogConfig } from './log.config';
import { ObservabilityConfig } from './observability.config';

export const appConfig = new AppConfig();
export const databaseConfig = new DatabaseConfig();
export const observabilityConfig = new ObservabilityConfig();
export const logConfig = new LogConfig();
