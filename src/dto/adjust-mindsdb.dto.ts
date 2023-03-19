import { IsOptional } from 'class-validator';
import { Expose } from 'class-transformer';
import { JsonValue } from '@precise/mindsdb-js-sdk/dist/util/json';

export class AdjustMindsdbDto {
  /** SELECT SQL statement to use for selecting data. */
  @Expose()
  @IsOptional()
  select?: string;
  /** Model and training parameters to set during adjustment. */
  @Expose()
  @IsOptional()
  using?: Record<string, JsonValue>;
}
