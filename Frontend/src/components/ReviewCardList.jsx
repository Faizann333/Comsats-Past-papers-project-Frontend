import { ReviewListContext } from './store/ReviewListContext'
import { useContext } from "react";
import ReviewCard from "./ReviewCard";

const ReviewCardList = ({reviewList}) => {

    return (
        <div className='p-3 flex gap-4 justify-center flex-wrap'>
                {reviewList.map(review => (
                    <ReviewCard key={review._id} review={review} />
                ))
            }
        </div>
    )
}

export default ReviewCardList
