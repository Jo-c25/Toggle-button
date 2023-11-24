import { useState } from "react"
import "./header.css"

const Toggle = () => {
    const [backgroundColor, setBackgroundColor] = useState("white")
    const [color, setTextColor] = useState("#121212")
    const [toggleText, setToggleText] = useState("Change to Black theme")
    const toggleColor = () => {
        if(backgroundColor == "white" && color == "#121212") {
            setBackgroundColor("#121212")
            setTextColor("white")
            setToggleText("Change to white theme")
        }else{
            setBackgroundColor("white")
            setTextColor("#121212")
            setToggleText("Change to Black theme")
        }
       
    }
    return (
        <div style={{backgroundColor, color}} className="app-container">
        <div style={{backgroundColor, color, border: `5px solid ${color}`}} className="head-container">
            
        <button style={{backgroundColor, color, border: `5px solid ${color}`,}} onClick={toggleColor}>{toggleText}</button>
        </div>
        <p className="text-container">
        This is a react toggle button for using to change a background color and text color at the same time.
      </p>
      </div>
    )
}

export default Toggle