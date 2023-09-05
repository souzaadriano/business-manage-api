export interface IEventPublisher {
  publish(): Promise<void>;
}
