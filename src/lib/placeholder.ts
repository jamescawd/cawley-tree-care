/**
 * Placeholders for business facts we do not have yet.
 *
 * Rule: never invent qualifications, insurance, years in business, reviews,
 * contact details or projects. Where a fact is missing, use `placeholder()`.
 *
 * - Placeholders are typed, so code must handle the "missing" case explicitly.
 * - SEO / structured data helpers drop placeholder values, so nothing fake is
 *   ever published to Google.
 * - `pnpm placeholders` (and every build) lists what is still outstanding.
 */

export interface Placeholder {
  readonly __placeholder: true;
  /** What information is needed, written for the business owner. */
  readonly label: string;
  /**
   * Optional sample text shown in previews so layouts can be judged with
   * realistic content. Always rendered with a visible "To confirm" marker.
   */
  readonly example?: string;
}

/** A value that may still be awaiting confirmation from the business. */
export type Maybe<T> = T | Placeholder;

/**
 * Marks a value as awaiting confirmation. Typed as `Maybe<T>` (default
 * string) so code handling it must cope with both states.
 */
export const placeholder = <T = string>(label: string, example?: string): Maybe<T> =>
  example === undefined ? { __placeholder: true, label } : { __placeholder: true, label, example };

export const isPlaceholder = (value: unknown): value is Placeholder =>
  typeof value === 'object' && value !== null && '__placeholder' in value;

/** Returns the real value, or `undefined` if it is still a placeholder. */
export const provided = <T>(value: T): Exclude<T, Placeholder> | undefined =>
  isPlaceholder(value) ? undefined : (value as Exclude<T, Placeholder>);

/** Text for visible rendering during development, e.g. "[Phone number]". */
export const display = (value: Maybe<string>): string =>
  isPlaceholder(value) ? `[${value.label}]` : value;
