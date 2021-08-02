import React from "react"; // This must be named this way
import Info from "./Info";
import Input from "./Input";

// This file contains a component
// It must be named in a capital beginning letter
// The file name is the same as the component name
// A component will be written like an html tag

function App(){
  let colorVar=React.useState("red");
  return(
    <div>
    <Info title="Title 1" text="this is a simple beginner react app"/>
      <Input label="button1" />
    </div>
  )
}

export default App;