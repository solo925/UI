import { Fragment } from "react"
import { Route, Routes } from "react-router-dom"
import AspectRatioDemo from "./components/AspectRatio/aspect"



function App() {
  

  return (
    <Fragment>
      <Routes>
        <Route path="/aspect" element={<AspectRatioDemo/>} />
      
      </Routes>
    </Fragment>
 
  )
}

export default App
