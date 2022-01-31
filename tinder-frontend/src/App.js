import React from "react"
import Header from "./Header"
import TinderCards from "./TinderCards"
import SwipeButtons from "./SwipeButtons"

const App=()=>{
    return(
    <div className="App">
        {/*<h1>Lets build MERN Tinder Clone together</h1>*/}
        <Header />
        <TinderCards/>
       <SwipeButtons/>
    </div>)
}

export default App;