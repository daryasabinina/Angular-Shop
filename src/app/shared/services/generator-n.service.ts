import { InjectionToken } from '@angular/core';
import { GeneratorService } from './generator.service';

export const NString = new InjectionToken<string>('NString');

export function GeneratorFactory(n: number): (generator: GeneratorService) => string {
  return (generator: GeneratorService): string => generator.getString().substr(0, n);
}
