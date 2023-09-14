import React, { useState } from 'react'

function TodoInput(props) {
    const[InputText,setInputText] = useState('') // #1
    const handleEnterPress = (e)=>{
        if(e.keyCode === 13){
            props.addlist(InputText)
            setInputText("")
        }
    }
  return (
    <div className ="input-conatainer">
        <input type="text" className="input-box-todo" placeholder='Enter Your todo' value={InputText} onChange={e=>{setInputText(e.target.value)}} onKeyDown={handleEnterPress}/>
        <button className="add-btn" onClick={()=> {
            props.addlist(InputText)
            setInputText("")
        }}>+</button>

    
    </div>
  )
}

export default TodoInput
