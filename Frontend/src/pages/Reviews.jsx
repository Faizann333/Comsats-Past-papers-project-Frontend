import ReviewCardList from '../components/ReviewCardList'
import { FaSearchDollar } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from '../components/store/ThemeContext';
import { ReviewListContext } from '../components/store/ReviewListContext';

const Reviews = () => {
    const { reviewList, getReviews } = useContext(ReviewListContext);
    const { darkMode } = useContext(ThemeContext);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        getReviews();
    }, []);
 
    const filteredReviews = reviewList.filter((review) =>
        review.instructorName.toLowerCase().includes(searchQuery.toLowerCase())
    );



    return (
        <div
            className={`flex flex-col items-center w-full min-h-[400px] p-6 transition-colors duration-300 
      ${darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"}`}
        >
            {/* Search Bar */}
            <div className="relative w-[600px]">

                <FaSearchDollar className={`absolute left-3 top-1/2 transform -translate-y-1/2 text-lg
    ${darkMode ? "text-gray-400" : "text-gray-500"}`}
                />
                <input
                    onChange={(e) => setSearchQuery(e.target.value)}
                    value={searchQuery}
                    className={`w-full p-2 pl-10 rounded-md border focus:outline-none focus:ring-2 transition-colors duration-300
      ${darkMode
                            ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:ring-green-500"
                            : "bg-white border-gray-300 text-black placeholder-gray-500 focus:ring-green-400"}`}
                    type="text"
                    placeholder="Search by Instructor Name "
                />
            </div>



            <h1 className="text-center font-bold text-2xl mt-3 mb-4"> Teachers Reviews</h1>

            {/* Papers List  */}
            {filteredReviews.length > 0 ? (
                <ReviewCardList reviewList={filteredReviews} />
            ) : (
                <h2 className="mt-6 text-lg font-medium text-gray-500">
                    No Reviews Found
                </h2>
            )}
        </div>
    );
};

export default Reviews;
