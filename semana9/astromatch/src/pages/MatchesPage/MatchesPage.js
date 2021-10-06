import React, { useState, useEffect } from "react"
import { ProfileListItem } from "../../../src/components/ProfileListItem"
import { MatchesContainer, MatchesList } from './styled'
import axios from 'axios'


export const MatchesPage = () => {
    const [matchesList, setMatchesList] = useState([])

    useEffect(() => {
        getMatchesList()
    }, [matchesList])

    const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leticia-chijo/matches"

    const getMatchesList = () => {
        axios.get(url)
        .then((res) => {
            setMatchesList(res.data.matches)
        })
        .catch((err) => {
            console.log(err.response)
        })
    }

    const list = matchesList.map((m) => {
        return <ProfileListItem photo={m.photo} name={m.name}/>
    })

    return (
        <MatchesContainer>
            <MatchesList>
                {list.length > 0 ? list : <div>Você não recebeu matches 💔</div>}
            </MatchesList>
        </MatchesContainer>
    )
}