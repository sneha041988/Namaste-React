import React from "react"
import  ReactDOM  from "react-dom/client"

const heading=React.createElement("h1",{id:"heading",className:"h1heading"},"Welcome to react world")
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(heading)