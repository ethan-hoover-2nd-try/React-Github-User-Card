import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
    width: 30%;
    margin-top: 0.8rem;
    align-self: center;
`

const UserContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    max-width: 30vw;
    margin: 0 auto;
    text-align: center;
    border-radius: 5rem;
    box-shadow: 0 1px 6px -2px #000;
    background-color: #fff;
    width: 100%;
    margin-bottom: 2rem;
`
const InfoContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-content: center;
    margin: 0 auto;
    width: 20rem;
`

const UserCard = props => {
    return (
        <UserContainer>
            <Img src={props.user.avatar_url}/>
            <h2>{props.user.name}</h2>
            <p> Bio: {props.user.bio}</p>
            <InfoContainer>
                <p> Followers: {props.user.followers}</p>
                <p> Following: {props.user.following}</p>
            </InfoContainer>
        </UserContainer>
    )
}

export default UserCard;