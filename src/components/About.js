import React from 'react'

export default function About(props){
    return(
        <>
        <div className='container my-3' style={{color:props.mode==='dark'?'white':'black'}}>
            <h1 >About TextUtils</h1>
            <h4>This is a basic text modification website which helps user to modify their text</h4>
        </div>
       </>
    )
}