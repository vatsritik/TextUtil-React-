import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        let upperText=text.toUpperCase();
        setText(upperText)
        props.showAlert("Converted to UpperCase","success")

    }
    const handleLoClick=()=>{
        let lowerText=text.toLowerCase();
        setText(lowerText)
        props.showAlert("Converted to LowerCase","success")

    }
    const handleSpaceClick=()=>{
        let newText=text.replace(/\s+/g,' ').trim();
        setText(newText)
        props.showAlert("Removed extra space","success")

    }
    
    const handleOnChange=(event)=>{
        
        setText(event.target.value);

    }
    const[text,setText]=useState('')


    return (
        <>
        <div className='container my-3' style={{color:props.mode==='light'?'black':'white'}}>
            <h3>{props.title}</h3>

            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='light'?'black':'white'}} id="myText" rows="5"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>UpperCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>LowerCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleSpaceClick}>Remove Extra Space</button>

        </div>
        <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
            <h3>Your Text Summary</h3>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>

        </>
    )
}
