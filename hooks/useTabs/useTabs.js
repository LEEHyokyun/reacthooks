import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

const content = [
  {
    id: 1,
    tab : "Section 1",
    content : "Section 1 content"
  },
  {
    id: 2,
    tab : "Section 2",
    content : "Section 2 content"
  }
]

export const useTabs = (initialTab, content) => {
  
  const [currentIndex, setCurrentIndex] = useState(initialTab)
  return{
    currentitem : content[currentIndex],
    ChangeItem : setCurrentIndex
  }
}

const App = () => {
   const isVaildContent = (content) => {
    if(!content || !Array.isArray(content)){
      return true;
  }}
  const {currentitem, ChangeItem} = useTabs(0, content)

  return(
    <div className="App">
    {isVaildContent(content)? "NotReady" : content.map(section => 
    <button key={section.id} onClick={()=>ChangeItem(section.id-1)}>{section.tab}</button>)}
          {/*map index is changed when the click event occurs.*/}
          {/*index is not that good trigger, should be replaced by id.*/}
      <div>{currentitem.content}</div>
    </div>
  )
}

