import { InjectionToken } from '@angular/core';
import { GeneratorService } from './generator.service';

export const NString = new InjectionToken<string>('NString');

export function GeneratorFactory(n: number) {
  return (generator: GeneratorService): string => generator.getString().substr(0, n);
}
