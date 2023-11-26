import React, { useState ,useEffect} from 'react'

export default function App({store}) {
  const [,forceUpdate] = useState()
 useEffect(()=>{
  store.subscribe(()=>forceUpdate({}),console.log(store.getState()))
 })
   var [idNumber,setIDnumber]= useState(4)
   var [divcolor,setDivColor]= useState('pink')
   const storeRender = store.getState().map(toRender=>(
    <div key={toRender.idNumber} id={toRender.id} style={{backgroundColor: toRender.color}}>{toRender.idNumber}</div>
    
))

const handleKeyDown = (event)=>{
     
    if (event.code === 'Enter') {
     store.dispatch({
        type : event.target.value,
        color : divcolor,
        idNumber : idNumber
  
      })
      
     if(event.target.value){
      setIDnumber(idNumber+1)
     }
      event.target.value = ''
    }
    switch (event.target.value) {

      case 'red' :return setDivColor("red")
      case 'green' :return setDivColor("green")
      case 'yellow' :return setDivColor("yellow")
      case 'blue' :return setDivColor("blue")
      case 'gray': return setDivColor("gray")
   }

   
  
}




  return <>
  <input type='text' onKeyDown={handleKeyDown}/>
  {storeRender}
  </>
    
}
