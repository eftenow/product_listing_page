import { AiTwotoneStar } from 'react-icons/ai';

const Reviews = ({ rating }) => (
    <section className="card-reviews">
        <AiTwotoneStar className='rating-star' />
        <span className="total-reviews">{rating}</span>
    </section>
);

export default Reviews;