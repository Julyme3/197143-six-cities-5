import {getFormattedDate} from "./utils";

export const commentAdaptToClient = (review) => {
  const adaptedComment = Object.assign(
      {},
      review,
      {
        src: review.user.avatar_url,
        name: review.user.name,
        raiting: review.rating,
        text: review.comment,
        dateFormated: getFormattedDate({
          date: review.date,
          options: {
            year: `numeric`,
            month: `long`,
          },
        }),
      });

  delete adaptedComment.user;
  delete adaptedComment.rating;
  delete adaptedComment.comment;

  return adaptedComment;
};

export const sortByDateDown = (reviewA, reviewB) => new Date(reviewB.date).getTime() - new Date(reviewA.date).getTime();
