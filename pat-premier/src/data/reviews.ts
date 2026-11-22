/**
 * Genuine customer reviews ONLY: copied word for word, with the customer’s
 * permission, from a real source (Google, Facebook, email, letter).
 * Never write, paraphrase or "improve" a review. Leave empty until real ones
 * are supplied; the site shows an honest "coming soon" panel meanwhile.
 */
export interface Review {
  text: string;
  /** As the customer wishes to be named, e.g. "Mary K." */
  name: string;
  location?: string;
  service?: string;
  /** Where the review was given, e.g. "Google review". */
  source?: string;
}

export const reviews: Review[] = [];
