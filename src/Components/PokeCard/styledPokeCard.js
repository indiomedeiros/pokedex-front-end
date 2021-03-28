import styled from 'styled-components'

export const DivCard = styled.div `
    display: flex;
    width: 300px;
    height: 300px;
    background-color: #e8f0f4;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: auto;
    margin-top: 10px;
    border-radius: 30px;
`
export const DivButtons = styled.div `
    display: flex;
    justify-content: center;
    
`
export const ButtonLeft = styled.button`
    width: 150px;
    height: 50px;
    background-color: #30a7d7;
    border: none;
    outline: none;
    color: white;
    box-shadow: 1px 1px 2px black;
    border-bottom-left-radius: 30px;
    :hover{
        background-color: orangered;
    }
    :active{
        box-shadow: none;
    }
`
export const ButtonRight = styled(ButtonLeft)`
    border-bottom-right-radius: 30px;
    border-bottom-left-radius: 0px;
`
export const PokeImage = styled.img `
    margin: auto;
    font-weight: lighter;
    width: 60%;
`
export const PokeName = styled.h1 `
    font-size: 1.2em;
    color: #30a7d7 ;
`