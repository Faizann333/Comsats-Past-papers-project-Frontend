
import PaperCard from './PaperCard'
const PaperCardList = ({ paperList }) => {


    return (
        <div className='p-3 flex gap-4 justify-center flex-wrap'>


                {paperList.map(paper => (
                    <PaperCard key={paper.id} paper={paper} />
                ))
            }

            
            {/* <PaperCard />
          <PaperCard />
            <PaperCard />
             <PaperCard />
              <PaperCard />
               <PaperCard />
                <PaperCard /> */}
        </div>
    )
}

export default PaperCardList
