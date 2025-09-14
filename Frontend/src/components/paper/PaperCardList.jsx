import React, { useContext } from 'react'
import { PastPapersContext } from '../store/PaperListContext'
import PaperCard from './PaperCard'
import Loader from '../loader/Loader';

const PaperCardList = ({ paperList }) => {
    const { loading } = useContext(PastPapersContext);


    return (
        <div className='p-3 pb-16 flex gap-4 justify-center flex-wrap'>

            {loading ? <Loader/> :
                paperList.map(paper => (
                    <PaperCard key={paper._id} paper={paper} />
                ))

            }

        </div>
    )
}

export default PaperCardList
