import React, { Component } from "react";
import { AnimationBox, Main, ContentBox, Footer, Header, AnimationName } from "./style";
import photo from "../Assets/photo.jpg";
import CarouselComponent from "./animation/Carousel/index"

export default function Home() {

        return(
            <>
            <Header>
                <h1>Estudo de animações</h1>
                <h1>com React</h1>
            </Header>
            <Main>
                <ContentBox>
                    <AnimationName>Carousel</AnimationName>
                    <AnimationBox>
                        <CarouselComponent/>
                    </AnimationBox>
                </ContentBox>
                <ContentBox>
                    <AnimationName>Animação</AnimationName>
                    <AnimationBox>
                        <CarouselComponent/>
                    </AnimationBox>
                </ContentBox>
            </Main>
            <Footer>
                <div id="about-me">
                    <div id="picture">
                        <div>
                            <img src={photo} alt="eu" />
                        </div>
                    </div>
                    <div id="text">
                        <h2>Sobre mim</h2>
                        <p>Olá, sou Alisson Zellner. Tenho 18 anos, sou natural de Jaraguá do Sul - SC. Comecei a 
                            estudar programação aos 16 anos e tomei ela como paixão. Sou desenvolvedor júnior, as 
                            linguagens das quais possuo conhecimento e estou me aprofundando são: React, Java(Spring) e MySQL.
                        </p>
                        <br />
                        <p>Acesse meu GitHub para ver meus projetos!</p>
                    </div>
                    <div id="links">
                        <a id="github" href="http://localhost:3000">
                            <h4>GitHub</h4>
                        </a>
                        <a id="linkedin" href="http://localhost:3000">
                            <h4>LinkedIn</h4>
                        </a>
                        <a id="email" href="http://localhost:3000">
                            <h4>Email</h4>
                        </a>
                    </div>
                </div>
            </Footer>
            </>
        )
}

