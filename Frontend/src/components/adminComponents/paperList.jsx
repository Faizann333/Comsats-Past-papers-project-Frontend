import React from 'react'
import PaperCard from "./paperCard"
const paperList = ({adminPaperList}) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4'>
      {adminPaperList.map((paper)=>(
         <PaperCard key={paper._id} paper={paper}/>
      )
      )}
     
    </div>
  )
}

export default paperList
