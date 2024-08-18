import React, { useState } from 'react'

export default function About() {
     const [myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white',
    })
    const [btntext, setBtnText] = useState("Enable Light Mode")
    const toggleStyle = () =>{
       if (myStyle.color === 'black'){
           setMyStyle({
               color:'white',
               backgroundColor:'black',
               border:'1px solid white'
           })
           setBtnText("Enable Light Mode")
        }
        else{
            setMyStyle({
                color:'black',
                backgroundColor:'white'
            })
            setBtnText("Enable Dark Mode")
       }   
    }
    return (
    <div className="container" style={myStyle}>
        <h1 className="my-3">About Us</h1>
           <div className="accordion" id="accordionExample" style={myStyle}>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Our Goal:
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>The goal of this project is to design, develop, and deploy a Text Converting Software that solves many important problems for Our Users!!! </strong>The software should provide UpperCase, LowerCase, Copy, Paste, Speak facilties, and deliver desired user experience or benefit. <code>The goal of this project is to design, develop, and deploy a web-based project management tool that helps small business owners and teams to efficiently manage their projects and tasks.</code>, The software should provide features such as task assignment, deadline tracking, and team collaboration, improve project completion rates by 30%, and deliver a user-friendly and intuitive experience.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
      <div className="container my-3">
         <button onClick={toggleStyle} type="button" className="btn btn-primary">{btntext}</button>
      </div>    
    </div>
  )
}
