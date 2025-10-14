import React from 'react'
import ReviewList from '../../components/adminComponents/ReviewList'
import { useContext } from "react"
import { AdminContext } from "../../components/store/AdminContext"

const Reviews = () => {
  const {adminReviewList} = useContext(AdminContext)
  console.log(adminReviewList)
  return (
    <div className='p-2 flex justify-center bg-gray-700 flex-row items-center'>
      <ReviewList adminReviewList={adminReviewList}/>
    </div>
  )
}

export default Reviews
