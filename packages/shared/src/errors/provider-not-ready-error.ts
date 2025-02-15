import { OpenFeatureError } from './open-feature-error-abstract';
import { ErrorCode } from '../evaluation';

export class ProviderNotReadyError extends OpenFeatureError {
  code: ErrorCode;
  constructor(message?: string) {
    super(message);
    Object.setPrototypeOf(this, ProviderNotReadyError.prototype);
    this.name = 'ProviderNotReadyError';
    this.code = ErrorCode.PROVIDER_NOT_READY;
  }
}
