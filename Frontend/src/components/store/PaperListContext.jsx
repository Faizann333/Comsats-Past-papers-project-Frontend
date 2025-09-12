
import { createContext, useContext, useReducer } from 'react'
import { getPapers} from '../../apis/paperApi';

export const PastPapersContext = createContext({
  paperList: [],
  addPaper: () => { },
  getPaper: () => { }
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
    const papers = await getPapers();

    const getPapersAction = {
      type: 'GET_PAPERS',
      payload: {
        papers : papers.data
      }
    }
    dispatchPaperList(getPapersAction);
  }

  return (
    <PastPapersContext.Provider value={
      {
        addPaper,
        paperList,
        getPaper

      }
    }>
      {children}

    </PastPapersContext.Provider>
  )
}

export default PaperListProvider


