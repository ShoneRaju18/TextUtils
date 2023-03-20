import React, {useState} from 'react'



export default function TextForm(props) {
    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success");
         
    }
    const handleDwClick = () =>{
        let newText = text.toLowerCase();
        setText(newText); 
        props.showAlert("Converted to Lowercase", "success");
    }
    const handleClearClick = () =>{
        let newText = '';
        setText(newText); 
        props.showAlert("Text Cleared", "success");
    }
    const handleOnChange = (event) =>{
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    return (
        <>
        <div style={{color : props.mode === 'dark'?'white':'#1450a9'}}>
            <h1>{props.heading} </h1>
            <div className="mb-3" >
            <textarea className="form-control" value = {text} onChange= {handleOnChange} style={{backgroundColor : props.mode === 'dark'?'grey':'white', color : props.mode === 'dark'?'white':'#1450a9'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleDwClick}>Convert to Lowercase</button>
        <button className="btn btn-primary" onClick={handleClearClick}>Clear Text</button>
         
        </div>
        <div className="container my-2" style={{color : props.mode === 'dark'?'white':'#1450a9'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
        </div>
        </>
  )
}
