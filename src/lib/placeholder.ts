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
}

/** A value that may still be awaiting confirmation from the business. */
export type Maybe<T> = T | Placeholder;

export const placeholder = (label: string): Placeholder => ({ __placeholder: true, label });

export const isPlaceholder = (value: unknown): value is Placeholder =>
  typeof value === 'object' && value !== null && '__placeholder' in value;

/** Returns the real value, or `undefined` if it is still a placeholder. */
export const provided = <T>(value: Maybe<T>): T | undefined =>
  isPlaceholder(value) ? undefined : value;

/** Text for visible rendering during development, e.g. "[Phone number]". */
export const display = (value: Maybe<string>): string =>
  isPlaceholder(value) ? `[${value.label}]` : value;
