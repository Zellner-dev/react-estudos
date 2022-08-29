import styled from 'styled-components';
import header from "../Assets/header.svg";
import footer from "../Assets/footer.svg";
import github from "../Assets/github.svg";
import linkedin from "../Assets/linkedin.svg";
import email from "../Assets/email.svg";
import githubhover from "../Assets/githubhover.svg";
import linkedinhover from "../Assets/linkedinhover.svg";
import emailhover from "../Assets/emailhover.svg";

export const Header = styled.header`
    width: 100%;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    background-image: url(${header});
    animation: header 20s ease-in-out infinite;
    border-bottom: 1px solid #21261f;

    h1{
        font-size: 45px;
        color: #39ad54;
    }

    @keyframes header {
        0%{
            background-position: 0vh 0%;
        }
        50%{
            background-position: 100% 0%;
        }
        100%{
            background-position: 0% 0%;
        }
    }
`
export const Main = styled.main`
    width: 100%;
`
export const ContentBox = styled.section`
    width: 100%;
    height: 500px;

    display: flex;
    justify-content: center;
    flex-direction: column;
`
export const AnimationName = styled.h1`
    margin: 0 0 1vh 15%;
    font-size: 4vh;
    color: #39ad54;
`

export const AnimationBox = styled.div`
    width: 70%;
    height: 400px;
    margin: 0% 15%;
    border: 1px solid #39ad54;
    border-radius: 5px;
`

export const Footer = styled.footer`
    width: 100%;
    height: 315px;
    
    border-top: 1px solid #1c1c1c;
    background-color: #000000;
    background-image: url(${footer});

    display: flex;
    justify-content: center;
    align-items: center;
    
    animation: footer 10s ease-in-out infinite;

    @keyframes footer {
        0%{
            background-position: 0vh 0%;
        }
        50%{
            background-position: 0% 100%;
        }
        100%{
            background-position: 0% 0%;
        }
    }

    #about-me{
        width: 90%;
        border-radius: 5px;
        backdrop-filter: blur( 4px );
        -webkit-backdrop-filter: blur( 4px );
        border-radius: 10px;
        transition: 1s;
        height: 80%;
        border: 1px solid #fff;
        background: #ffffff10;
        color: #fff;
        box-shadow: 0 0px 32px 0 #ffffff30;
        display: flex;
        align-items: center;
    }
    #about-me:hover{
        box-shadow: 0 10px 32px 0 #ffffff50;
        backdrop-filter: blur( 6px );
        -webkit-backdrop-filter: blur( 6px );
    }
    #picture{
        width: 225px;
        height: 225px;
        /* background-color: #ffffff50; */
        
        display: flex;
        justify-content: center;
        align-items: center;
        div{
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            height: 90%;
            border-radius: 50%;
            border: 2px solid #fff;
        }
        img{
            height: 100%;
            transition: 1s;
        }
        img:hover{
            transform: scale(1.2);
        }
    }
    #text{
        width: 55%;
        padding: 0 2%;
    }
    #links{
        width: 20%;
        height: 100%;

        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-content: center;


        a{
            width: 90%;
            height: 20%;
            border-radius: 5px;
            
            background-color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            text-decoration: none;
            color: #1c1c1c;
            border: 2px solid #ffffff;
            
            background-repeat: no-repeat;
            background-size: 15%;
            background-position-y: center;
            background-position-x: 5%;
            transition: 1s;
            h4{
                position: absolute;
            }
        }
        a:hover{
            background-color: #1c1c1c00;
            color: #ffffff;
        }
        #github{
            background-image: url(${github});   
            transition: 1s;
            &:hover{  
                background-image: url(${githubhover});   
            }
        }

        #linkedin{
            background-image: url(${linkedin});
            transition: 1s;
            &:hover{  
                background-image: url(${linkedinhover});   
            }
        }
        #email{
            background-image: url(${email});
            transition: 1s;
            &:hover{  
                background-image: url(${emailhover});   
            }
        }
    }
`