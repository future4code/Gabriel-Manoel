import React from "react"
import { useHistory } from "react-router";


const Feed = () =>{
    const history = useHistory()
    const buttonFeed = () =>{
        history.push("/")
    }
    return(
        <div>
            <h1>Cadastro</h1>
            <button onClick={buttonFeed}>Home</button>

        </div>
    )
}

export default Feed;