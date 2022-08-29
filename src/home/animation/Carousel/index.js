import React from "react";
import "./app.css";
import img1 from "../../../Assets/tenis1.jpg"
import img2 from "../../../Assets/tenis2.jpg"
import img3 from "../../../Assets/tenis3.jpg"
import left from "../../../Assets/left.svg"
import right from "../../../Assets/right.svg"
import { Box, Buttons, Card, Carousel, Flechas, ImgFlechas, ImgItem, InfoItem, NomeItem, Destaque,
     PrecoDesc, PrecoItem, PrecoPromoItem, Comprar, OpcaoPgto, PrecoPix, ImgBox } from "./style";

function CarouselComponent () {

    const itens = [
        {key:1, img: img1, nome: "TENIS NIKE SB FORCE 58", preco: 579.99},
        {key:2, img: img2, nome: "TENIS NIKE SB CHRON 2 CNVS", preco: 449.99},
        {key:3, img: img3, nome: "TENIS NIKE SB CHRON 2", preco: 549.99},
    ]
    
    var currentCarousel = 1;
    const carousel = React.useRef(null);
    var carouselInterval;
    carouselInterval = setInterval (movimentarCarousel, 5000);
    
    function handleLeft() {
        zerarIntervalo();
        if(currentCarousel > 1){
            carousel.current.scrollLeft -= carousel.current.offsetWidth;
            currentCarousel -= 1;
        } else {
            // if (currentCarousel == 1)
            carousel.current.scrollLeft += carousel.current.offsetWidth * (itens.length - 1);
            currentCarousel = itens.length;
        }
    }

    function handleRight() {
        zerarIntervalo();
        if(currentCarousel  < itens.length){
            carousel.current.scrollLeft += carousel.current.offsetWidth;
            currentCarousel += 1;
        } else {
            // if (currentCarousel == itens.length)
            carousel.current.scrollLeft -= carousel.current.offsetWidth * (itens.length - 1);
            currentCarousel = 1;
        }    
    }

    function zerarIntervalo(){
        clearInterval(carouselInterval);
        carouselInterval = setInterval (movimentarCarousel, 5000);
    };

    function movimentarCarousel() {
        handleRight();   
    }
    
    return(
        <>
        <Box>
            <Carousel ref={carousel}>
                {React.Children.toArray(itens.map (({key, img, nome, preco}) =>  
                    <Card>
                        <InfoItem>
                            <NomeItem>
                                {nome}
                            </NomeItem>
                            <PrecoPromoItem>
                                R$ {(preco/100*88).toFixed(2)}
                            </PrecoPromoItem>
                            <PrecoPix>
                                À vista no <Destaque>PIX</Destaque> com até <Destaque>12% OFF</Destaque>
                            </PrecoPix>
                            <PrecoItem>
                                R$ {preco}
                            </PrecoItem>
                            <PrecoDesc>
                                Em até 10x de R$ {(preco/10).toFixed(2)} sem juros
                            </PrecoDesc>
                            <PrecoDesc>
                                Ou em 1x no cartão com até <Destaque>10% OFF</Destaque>
                            </PrecoDesc>
                            <OpcaoPgto>
                                Ver mais opções de pagamento
                            </OpcaoPgto>
                            <Comprar>
                                COMPRAR
                            </Comprar>
                        </InfoItem>
                        <ImgBox>
                            <ImgItem key={key} src={img} alt={nome} /> 
                        </ImgBox>
                    </Card>
                ))}
            </Carousel>
            <Buttons>
                <Flechas onClick={handleLeft}>
                    <ImgFlechas src={left} alt="voltar" />
                </Flechas>
                <Flechas onClick={handleRight}>
                    <ImgFlechas src={right} alt="avançar" />
                </Flechas>
            </Buttons>
        </Box>
        </>
    )
}

export default CarouselComponent;