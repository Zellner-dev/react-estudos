import styled from "styled-components";
import cart from "../../../Assets/cart.svg"

export const Box = styled.div`
    width: 100%;
    height: 100%;
`
export const Carousel = styled.div`
    width: 100%;
    height: 85%;
    border-radius: 5px 5px 0px 0px;
    display: flex;
    overflow-x: hidden;
    scroll-behavior: smooth;
    background-color: #21261f;
    border-bottom: 1px solid #39ad54;
`
export const Card = styled.div`
    width: 90%;
    height: 90%;
    border-radius: 5px;
    background-color: #fff;
    display: flex;
    flex: none;
    margin: auto 5%;
`
export const InfoItem = styled.div`
    width: 60%;
    height: 100%;
`
export const NomeItem = styled.h1`
    color: #000;
    margin: 1% 1% 2% 5%;
`
export const PrecoItem = styled.p`
    color: #636363;
    margin: 1% 1% 1% 5%;
    font-weight: bold;
`
export const PrecoPromoItem = styled.h1`
    color: #30d413;
    margin: 2% 1% 0% 5%;
    font-size: 30px;
`
export const PrecoPix = styled.p`
    color: #636363;
    margin: 0 1% 3% 5%;
`
export const PrecoDesc = styled.p`
    color: #636363;
    margin: 1% 1% 1% 5%;
`
export const OpcaoPgto = styled.button`
    margin: 3% 1% 3% 5%;
    background-color: #ffffff00;
    color: #636363;
    text-decoration: underline;
    border: none;
    cursor: pointer;
`
export const Comprar = styled.button`
    width: 90%;
    height: 20%;
    border-radius: 5px;
    font-size: 20px;
    margin: 0 5%;
    background-size: 7%;
    background-position-x: 33%;
    background-image: url(${cart});
    background-repeat: no-repeat;
    background-position-y: center;
    background-color: #30d413;
    color: #fff;
    font-weight: bold;
    outline: none;
    border: none;
    cursor: pointer;
    transition: 1s;

    &:hover{
        background-color: #30d41360;
    }
`
export const Destaque = styled.span`
    font-weight: bold;
`
export const ImgBox = styled.div`
    width: 45%;
    height: 100%;
    display: flex;
    overflow: hidden;
    `
export const ImgItem = styled.img`
    height: 100%;
    margin: auto;
    transition: 1s;

    &:hover{
        transform: scale(1.3);
    }
`
export const Buttons = styled.div`
    width: 100%;
    height: 15%;
    display: flex;
    justify-content: center;
`
export const Flechas = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    outline: none;
    border: none;
    cursor: pointer;

    &:hover img{
        filter: drop-shadow( 0 0 5px #FFF);
        transform: scale(1.2);
    }
`
export const ImgFlechas = styled.img`
    width: 90%;
    transition: 0.5s;
`
