import {createContext, useContext,useReducer} from 'react'


export const PastPapersContext = createContext({
 paperList: [],
 addPaper: ()=>{}
})

const paperListReducer=(currentPaperList,action)=>{
   let newPaperList = currentPaperList
   if(action.type=='ADD_PAPER'){
      newPaperList= [action.payload.paperDetail,...currentPaperList]
   }
   return  newPaperList;
}

const PaperListProvider = ({children}) => {
    const [paperList,dispatchPaperList]= useReducer(paperListReducer,[]);
    console.log(paperList)

    const addPaper=(paperDetail)=>{
        const addPaperAction={
            type:'ADD_PAPER',
            payload:{
              paperDetail
            }
        }
        dispatchPaperList(addPaperAction);
    }
  return (
    <PastPapersContext.Provider value={
        {
            addPaper,
            paperList

        }
    }>
       {children}
      
    </PastPapersContext.Provider>
  )
}

export default PaperListProvider


