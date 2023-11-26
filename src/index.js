import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style.css'
import {createStore} from 'redux'
var initState = [
  {
    id : 'circle',
    color : 'rgb(214, 142, 59)',
    idNumber: 1
  
  },{
    id : 'square',
    color : 'rgb(214, 142, 59)',
    idNumber: 2
  
  },{
    id : 'circle',
    color : 'rgb(214, 142, 59)',
    idNumber : 3
  
  }
]

const reducer = (state = initState , action )=>{
  switch (action.type) {
    case 'ADD_CIRCLE' : return [...state,{
        id : 'circle',
        color : action.color,
        idNumber : action.idNumber
      }
    ]
      
    case 'ADD_SQUARE': return [
      ...state,{
        id : 'square',
        color : action.color,
        idNumber : action.idNumber
      }
    ]

    case 'REMOVE_SHAPE': return null
  
    default: return state

  }
}



const store = createStore(reducer)



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>
);

