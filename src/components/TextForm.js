import React, { useState } from "react";
export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleClearClick = () => {
        let newText = ('');
        setText(newText)
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState('');
    return (
        <>
            <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="my-3">
                    <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}} onChange={handleOnChange} aria-label="With textarea" rows='5'></textarea>
                </div>
                <div className='btn btn-primary' onClick={handleUpClick}>Convert to UPPERCASE</div>
                <div className='btn btn-primary mx-3' onClick={handleLoClick}>Convert to lowercase</div>
                <div className='btn btn-primary' onClick={handleClearClick}>Clear Text</div>
            </div>
            <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
                <h1>Your Text Summary</h1>
                <p><b>{text.split(" ").length}</b> words and <b>{text.length}</b> characters</p>
                <p><b>{0.008*text.split(" ").length}</b> Minutes read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
} 