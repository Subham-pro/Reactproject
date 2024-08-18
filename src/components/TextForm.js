import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked!!!" +  text);
        let newText = text.toUpperCase();
        setText(newText)
        alert("Converted to Uppercase!!!");
    }
    const handleLoClick = ()=>{
        console.log("Lowercase was clicked!!!" +  text);
        let newText = text.toLowerCase();
        setText(newText)
        alert("Converted to Lowercase!!!");
    }
    const handleClearClick = ()=>{
        console.log("Text is cleared!!! " + text);
        let newText ='';
        setText(newText)
        alert("Text cleared!!!");
    }
    const handleCopyClick = ()=>{
        console.log("Text copied!!! " + text);
        navigator.clipboard.writeText(text);
        alert("Text copied to clipboard!!!");
    }
    const handlePasteClick = async ()=>{
        console.log("Text pasted!!! ");
        const text = await navigator.clipboard.readText();
        setText(text);
        alert("Text pasted to clipboard!!!");
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }
    const handleOnChange = (event)=>{
        console.log("On change");
        setText(event.target.value)
    }
    const [text, setText] = useState('');
    return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert To Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy</button>
        <button className="btn btn-primary mx-2" onClick={handlePasteClick}>Paste</button>
        <button type="submit" className="btn btn-primary mx-2" onClick={() => speak()}>Speak</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something In The Textbox Above To Preview It Here!!!"}</p>
    </div>
    </>
  )
}
