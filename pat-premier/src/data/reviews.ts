/**
 * Genuine customer reviews ONLY: copied word for word from the customer's
 * public Facebook post or comment (names as shown there). Never write,
 * paraphrase or "improve" a review. Business posts are not reviews.
 */
export interface Review {
  text: string;
  /** As the customer is named on Facebook. */
  name: string;
  location?: string;
  service?: string;
  /** Where the review was given, e.g. "Google review". */
  source?: string;
}

export const reviews: Review[] = [
  {
    name: 'Ann DeBarra',
    source: 'Facebook review',
    text: "From start to finish Pat was so professional, he is a gentleman to deal with as is his co worker. They are hard working men who get the job done, the time frame was amazing, the stanard of workmanship was outstanding, I would recommend Pat and his team to anyone out there looking to get a job done, so much so that I have him booked for my next job!5 star",
  },
  {
    name: 'Jewels Carroll-Reid',
    service: 'Full re-roof',
    source: 'Facebook post on the Pat Premier page',
    text: "Pat recently replaced my full roof the slates, battons and the old felt. He arrived and put up his scaffolding and got to work stripping the old and replacing it all! He tidied up after him took away all the rubbish! I can't fault his work and Pat and Jason were out in all sorts of weather and it was a very fair price! I would definitely recommend Pat Premier for any jobs.",
  },
  {
    name: 'Jenny Murphy',
    service: 'Driveway',
    source: 'Facebook recommendation',
    text: "Reliable and professional. Pat did a great job on my driveway. Grass and Cobblestone removed and fully concreted. Leaves the area clean and tidy and removes all the rubbish/debris. Pat also did a small plumbing job for me. Pricing is affordable and not over the top. Lovely lads to deal with.",
  },
  {
    name: 'Aoife Reeves',
    service: 'Roof repair after a storm',
    source: 'Facebook comment on the Pat Premier page',
    text: "5 star came and fixed my roof today after the storm Thursday couldn't be happier with the work thank you pat",
  },
];
