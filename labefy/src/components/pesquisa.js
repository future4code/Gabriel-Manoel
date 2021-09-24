import axios from "axios";
import React from "react";
import styled from "styled-components";


export default class List extends React.Component {
   state = {
       playlist:[],
       playlistName:''
   }
   
    headers = {
       headers:{
        Authorization: "Gabriel-Manoel-maryam"
       }
   }

   componentDidMount(){
       this.getAllPlalist()
   }

   handlePlaylistName = (e) => {
       this.setState({playlistName: e.target.value})
   }

   createPlaylists = () =>{
       const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";
       const body = {
           name: this.state.playlistName
       }

       axios
       .post(url, body, this.headers)
       .then((resposta) => {
           this.setState({playlist: ''})
           this.getAllPlalist()
       })
   }

   getAllPlalist = () => {
       const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
       axios
       .get(url, this.headers)
       .then((resposta)=>{
           this.setState({playlist: resposta.data.result.list})

       })
       .catch((erro)=>{
          console.log(erro.resposta) 
       })
   }

    render() {
        const playlistComponents =  this.state.playlist.map((play)=>{
            return <li key={play.id}>{play.name}</li>
        })
           

               
            
      
        return (
            <div>
                <input 
                placeholder="Nome playlist"
                value={this.state.playlistName}
                onChange={this.handlePlaylistName}/>
                <button onClick={this.createPlaylists}>Enviar</button>
                {playlistComponents}
            </div>
        )
    }
}