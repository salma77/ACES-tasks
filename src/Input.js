import React from "react"; 
import isColor from "./Color";
//hook: useRef

function Input(props){
    const [color, setColor] = React.useState("");
    const [renderColor, setRenderColor] = React.useState("");
    const renderCount = React.useRef(0);

  return(
    <div>
      <input type="text" value={color} onChange={(event)=>{
          setColor(event.target.value);
        }}/>
        
      <button onClick={()=>{
        setRenderColor(color);

        if(isColor(color))
          renderCount.current = renderCount.current + 1;

      }}>{props.label}</button>

      <div className= "colored-div" style={{backgroundColor: renderColor}}></div>
      <div>We rendered {renderCount.current} times!</div>
    </div>
  )
}

export default Input;