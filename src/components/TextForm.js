import React, {useState} from "react";

export default function TextForm(props) {
    const HandleUpClick = () =>{
        // console.log("Button is clicked");
        let newtext = text.toUpperCase();
        settext(newtext);
        props.showAlert("Converted to UpperCase" , "success");
    }

    const HandleLowClick = () =>{
        // console.log("Button is clicked");
        let newtext = text.toLowerCase();
        settext(newtext);
        props.showAlert("Converted to LowerCase" , "success");

    }

    const HandleDelClick = () =>{
        // console.log("Button is clicked");
        let newtext = "";
        settext(newtext);
        props.showAlert("Text-Deleted" , "danger");

    }

    const HandleOnChange = (event) => {
        // console.log("On Change")
        settext(event.target.value);
    }
    
    // const [MyStyle, setMyStyle] = useState({
    //     color : 'black',
    //     backgroundColor : 'white'    
    // })

    // // const [btnText, setBtnText] = useState("Dark mode")

    // const tooglemode =()=> {
    //     if(MyStyle.color === 'white'){
    //         setMyStyle({
    //         color : 'black',
    //         backgroundColor: 'white',
    //         border : '2px solid black'
    //         })    
    //         // setBtnText("White mode");
    //     }
    //     else{
    //         setMyStyle({
    //             color : 'white',
    //             backgroundColor : 'black'
    //         })
    //         // setBtnText("Dark mode")
    //     }
    // }

    const [text, settext] = useState("");
  return (
      <>
    <div className="container" style={{color: props.mode==='light'?'black':'white'}}>  
    <div className="container">
      <h1>{props.text}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={HandleOnChange} style={{backgroundColor: props.mode ==='dark'?'black':'white' , color: props.mode==='light'?'black':'white'}} id="exampleFormControlTextarea1" rows="11" placeholder="type text here"></textarea>
      </div>
        <button className="btn btn-secondary mx-1" onClick={HandleUpClick}>convert into Uppercase</button>
        <button className="btn btn-dark mx-1" onClick={HandleLowClick}>convert into Lowercase</button>
        <button className="btn btn-danger mx-1" onClick={HandleDelClick}>Delete text</button>

    </div>
    <div className="container my-2" >
        <h2>Your Text Summary</h2>
        <p>{text.split(' ').filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
        <p>{0.008 * text.split(' ').length} Minutes to read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something in the above box to preview it here-"}</p>
    </div>

    {/* <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={tooglemode}/>
            <label class="form-check-label" for="flexSwitchCheckDefault">Dark mode</label>
        </div> */}
    </div>
    </>
  )
}
