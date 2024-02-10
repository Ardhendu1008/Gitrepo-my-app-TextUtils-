import React from 'react'
import PropTypes from 'prop-types'


export default function About(props) {
  let myStyle = {
    backgroundColor: props.mode ==='light'?'white':'#205d7a',
    color : props.mode==='light'? 'black':'white' 
  };
  return (
    <div className='my-3'>
      <h1 className={`text-${props.mode==='light'?'dark':'light'}`}>About us</h1>
      <div className="accordion pro" id="accordionExample">
  <div className= 'accordion-item' style={myStyle}>
    <h2 className="accordion-header">
      <button className={`accordion-button`} style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <strong># Text Case Transformation & Extra Space Removal</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Seamlessly switch between uppercase, lowercase and title case to suit your formatting needs.Easily eliminate unnecessary spaces within your text, ensuring cleaner and more polished content.
      </div>
    </div>
  </div>
  <div className={`accordion-item`} style={myStyle}>
    <h2 className="accordion-header">
      <button className={`accordion-button`} style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <strong># Text Copying</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Instantly copy modified text to your clipboard with a single click, streamlining the sharing and usage of your content.
      </div>
    </div>
  </div>
  <div className={`accordion-item`} style={myStyle}>
    <h2 className="accordion-header">
      <button className={`accordion-button`} style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <strong># Word and Character Counting</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Gain insights into the length of your text with accurate word and character counting functionalities, ideal for writers, students, and professionals.Whether composing emails, formatting documents, refining code snippets, or preparing social media posts, TextUtil simplifies text editing tasks, saving time and effort.
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
