import ReviewCard from "./ReviewCard"

const ReviewList = ({adminReviewList}) => {
  return (
    <div className="flex flex-wrap gap-3 justify-center">

      {adminReviewList.map((review)=>
      <ReviewCard key={review._id} review={review}/>)
      }

    </div>
  )
}

export default ReviewList
