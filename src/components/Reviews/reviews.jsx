export const Reviews = ({ reviews }) => {
  return (
    <div>
      <h3>Reviews:</h3>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <p>
              <i>{review.text}</i>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
