import { createContext, useReducer ,useState} from "react";
import { getReview } from "../../apis/reviewApi";

// Create Context
export const ReviewListContext = createContext({
    reviewList: [],
    addReview: () => { },
    getReviews: () => { },
    deleteReview: () => { },
    updateReview: () => { },

});

//  Reducer Function
const reviewListReducer = (currentReviewList, action) => {
    switch (action.type) {
        case "ADD_REVIEW":
            return [action.payload.reviewDetail, ...currentReviewList];
        case "GET_REVIEW":
            return [...action.payload.reviews];
        default:
            return currentReviewList;
    }
};

//  Provider Component
const ReviewListProvider = ({ children }) => {
    const [reviewList, dispatchReviewList] = useReducer(reviewListReducer, []);
    const [loading, setLoading] = useState(true);
  
    // Add new review
    const addReview = (reviewDetail) => {
        dispatchReviewList({
            type: "ADD_REVIEW",
            payload: { reviewDetail },
        });
    };
    const getReviews = async () => {
        try {
            const reviews = await getReview();
            dispatchReviewList({
                type: "GET_REVIEW",
                payload: {
                    reviews: reviews.data
                },
            });
        }
        catch (error) {
            console.error("Error fetching reviews:", error);
        }finally{
            setLoading(false);
        }
    }


    return (
        <ReviewListContext.Provider
            value={{
                reviewList,
                addReview,
                getReviews,
                loading
            }}
        >
            {children}
        </ReviewListContext.Provider>
    );
};

export default ReviewListProvider;
