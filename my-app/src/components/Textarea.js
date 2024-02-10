import React, {useState} from 'react'
import PropTypes from 'prop-types'


export default function Textarea(props) {

    const handleUpClick=()=>{
        const newText = text.toUpperCase();
        // console.log(newText);
        setText(newText);
    }
    const handleClear=()=>{
        setText("");
    }
    const handleSpace=()=>{
        const newText = text.split(/[ ]+/);
        // console.log(newText);
        setText(newText.join(" "));
    }
    const handleCopy=()=>{
        const newText = text;
        navigator.clipboard.writeText(newText);
    }
    const handleLwClick=()=>{
        const newText = text.toLowerCase();
        // console.log(newText);
        setText(newText);

    }
    const handleNewClick=()=>{
        var final
        var arr = [];
        const newText = text.split(". ");
        newText.forEach((element,idx)=>{
            var first = element.charAt(0).toLocaleUpperCase();
            // console.log(first);
            var rest = element.slice(1,element.length).toLocaleLowerCase();
            // console.log(rest);
            // console.log(first.concat(rest));

            arr[idx] = first.concat(rest);

            // console.log(arr.join(". "));
            final = arr.join(". ");
            // console.log(final);
            
        })
        // console.log(newText);
        setText(final);
    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    const [text, setText] = useState('');


    let myStyle = {
        backgroundColor: props.mode ==='light'?'white':'#205d7a',
        color : props.mode==='light'? 'black':'white', 
        height: '300px'
      };
        
    return (
    <div>
        <h3 className={`my-3 text-${props.mode==='light'? 'dark':'light'}`}>{props.heading}</h3>
        <div className="my-3">
        <textarea className={`form-control`} value={text} id="floatingTextarea2" placeholder='Text' style={myStyle} onChange={handleOnChange}></textarea>
        </div>
        <button type="button" className="btn btn-primary" onClick={handleUpClick}>ABC</button>
        <button type="button" className="btn btn-primary mx-1 my-1" onClick={handleNewClick}>Abc</button>
        <button type="button" className="btn btn-primary mx-1 my-1" onClick={handleLwClick}>abc</button>
        <button type="button" className="btn btn-primary mx-1 my-1" onClick={handleClear}>clear</button>
        <button type="button" className="btn btn-primary mx-1 my-1" onClick={handleSpace}>spaceRemover</button>
        <button type="button" className="btn btn-primary mx-1 my-1" onClick={handleCopy}>copy</button>
        

        <p className={`my-3 text-${props.mode ==='light'? 'dark':'light'}`}>Word Count : {text.replaceAll("\n"," ").split(" ").filter((element)=> element.length!=0).length}</p>
        <p className={`my-3 text-${props.mode ==='light'? 'dark':'light'}`}>Charecter Count : {text.replaceAll("\n"," ").split(" ").filter((element)=> element.length!=0).join('').length}</p>
    </div>
  )
}
