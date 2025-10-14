
import { createContext, useContext, useReducer } from 'react'
import { getPapers} from '../../apis/paperApi';
import { useEffect ,useState } from 'react';

export const PastPapersContext = createContext({
  paperList: [],
  addPaper: () => { },
  getPaper: () => { },

})

const paperListReducer = (currentPaperList, action) => {
  let newPaperList = currentPaperList
  if (action.type == 'ADD_PAPER') {
    newPaperList = [action.payload.paperDetail, ...currentPaperList]
  }
  else if(action.type == 'GET_PAPERS'){
    newPaperList = [...action.payload.papers]
  }
  
  return newPaperList;
}

const PaperListProvider = ({ children }) => {
  const [paperList, dispatchPaperList] = useReducer(paperListReducer, []);
  const [loading, setLoading] = useState(true);
  

  const addPaper = (paperDetail) => {
    const addPaperAction = {
      type: 'ADD_PAPER',
      payload: {
        paperDetail
      }
    }
    dispatchPaperList(addPaperAction);
  }

  //get papers from backend
  const getPaper = async () => {
    try{
    const papers = await getPapers();
    console.log(papers);

    const getPapersAction = {
      type: 'GET_PAPERS',
      payload: {
        papers : papers.data
      }
    }
    dispatchPaperList(getPapersAction);
  } catch(err){
    console.error("Error fetching papers:", err);
   } finally {
    setLoading(false);
  }
  }
  //fetching papers when app loads first time
  useEffect(() => {
    getPaper();
  }, [])

  return (
    <PastPapersContext.Provider value={
      {
        addPaper,
        paperList,
        getPaper,
         loading
      }
    }>
      {children}

    </PastPapersContext.Provider>
  )
}

export default PaperListProvider


