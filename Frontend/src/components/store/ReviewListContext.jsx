import { createContext, useReducer } from "react";

// Create Context
export const ReviewListContext = createContext({
    reviewList: [],
    addReview: () => { },
    deleteReview: () => { },
    updateReview: () => { },
});

//  Reducer Function
const reviewListReducer = (currentReviewList, action) => {
    switch (action.type) {
        case "ADD_REVIEW":
            return [action.payload.reviewDetail, ...currentReviewList];
        default:
            return currentReviewList;
    }
};

//  Provider Component
const ReviewListProvider = ({ children }) => {
    const [reviewList, dispatchReviewList] = useReducer(reviewListReducer, []);
    console.log("Review List:", reviewList);
    // Add new review
    const addReview = (reviewDetail) => {
        dispatchReviewList({
            type: "ADD_REVIEW",
            payload: { reviewDetail },
        });
    };

    // 
    return (
        <ReviewListContext.Provider
            value={{
                reviewList,
                addReview,
            }}
        >
            {children}
        </ReviewListContext.Provider>
    );
};

export default ReviewListProvider;
