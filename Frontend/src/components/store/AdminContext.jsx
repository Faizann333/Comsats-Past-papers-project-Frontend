import { createContext, useEffect, useState , useReducer } from "react";
import { getAdminPapers , getAdminReviews, getAdminUsers } from "../../apis/admin/adminApi";

export const AdminContext = createContext({
    adminPaperList: [],
    fetchAdminPapers: () => { },
    adminReviewList: [],    
     fetchAdminReviews: () => { },
    adminUserList: [],
    fetchAdminUsers: () => { },
    // loading: true
})

const adminPaperListReducer = (currentAdminPaperListReducer, action) => {
    switch (action.type) {
        case 'FETCH_ADMIN_PAPERS':
            return [...action.payload.papers];
        default:
            return currentAdminPaperListReducer;
    }

}

const adminReviewListReducer = (currentAdminReviewListReducer, action) => {
    switch (action.type) {
        case 'FETCH_ADMIN_REVIEWS':
            return [...action.payload.reviews];
        default:
            return currentAdminReviewListReducer;
    }   
}

const adminUserListReducer = (currentAdminUserListReducer, action) => {
    switch (action.type) {
        case 'FETCH_ADMIN_USERS':
            return [...action.payload.users];
        default:
            return currentAdminUserListReducer;
    }   
}

const AdminProvider = ({ children }) => {

     const [adminPaperList, dispatchAdminPaperList] = useReducer(adminPaperListReducer, []);
     const [adminReviewList, dispatchAdminReviewList] = useReducer(adminReviewListReducer, []);
     const [adminUserList, dispatchAdminUserList] = useReducer(adminUserListReducer, []);

    // const [loading, setLoading] = useState(true);
    const fetchAdminPapers = async () => {
    
        try {
            const papers = await getAdminPapers();
            

            const fetchAdminPapersAction = {
                type: 'FETCH_ADMIN_PAPERS',
                payload: {
                    papers: papers.data
                }
            };
            dispatchAdminPaperList(fetchAdminPapersAction);
        } catch (error) {
            console.error("Error fetching admin papers:", error);
        }
        // finally {
        //     setLoading(false);
        // }
    }
        const  fetchAdminReviews = async () => {
            try {
                const reviews = await getAdminReviews();
                console.log(reviews);

                const fetchAdminReviewsAction = {
                    type: 'FETCH_ADMIN_REVIEWS',
                    payload: {
                        reviews: reviews.data
                    }
                };
                dispatchAdminReviewList(fetchAdminReviewsAction);
            } catch (error) {
                console.error("Error fetching admin reviews:", error);
            }
    };

    const fetchAdminUsers = async () => {
        try {
            const users = await getAdminUsers();
            console.log(users);
            const fetchAdminUsersAction = {
                type: 'FETCH_ADMIN_USERS',
                payload: {
                    users: users.data
                }

            };
            dispatchAdminUserList(fetchAdminUsersAction);
        } catch (error) {
            console.error("Error fetching admin users:", error);
        }
    }


    // useEffect(() => {
    //     fetchAdminPapers();
    // }, []);
    return (
    <AdminContext.Provider value={{
        adminPaperList,
        fetchAdminPapers,
        adminReviewList,
        fetchAdminReviews,
        adminUserList,
        fetchAdminUsers,

        // loading
    }}>
      {children}
    </AdminContext.Provider>);
}

export default AdminProvider;