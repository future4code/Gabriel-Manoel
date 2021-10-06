import React, {useState, useEffect} from "react";
import {HomeContainer, Profile, ProfileImage} from "./styled"
import axios from "axios";

export const HomePage = () =>{
   
    const[profile, setProfile] = useState({})

    const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gabriel-manoel-maryam"

    useEffect(()=>{
        getProfile()
    },[])

    const getProfile = () =>{
        axios.get(`${url}/person`)
        .then((res)=>{
            setProfile(res.data.profile)
        })
        .catch((err)=>{
            console.log(err.response)
        })
    }

    const chosePerson = () =>{
        const body ={
            id: profile.id,
            choice: profile.choice
        }
        axios.post(`${url}`, body)
        .then((res)=>{
            getProfile()
            console.log(res.data)
        })
        .catch((err)=>{
            console.log(err.resposta)
        })
    }

    return(
        <HomeContainer>
           {!profile ? <div>Acabaram os perfis! Aperte o botão de limpar</div>:
           <Profile>
                <ProfileImage src={profile.photo}/>
                <h2>{profile.name}, {profile.age}</h2>
                <p>{profile.bio}</p>
                <div>
                    <button onClick={() => chosePerson(true)}>❌</button>
                    <button onClick={() => chosePerson(false)}>💚</button>
                </div>
               
           </Profile>}
        </HomeContainer>
    )
}