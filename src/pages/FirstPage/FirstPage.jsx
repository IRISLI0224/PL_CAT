import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";
import bg from "../../assests/img/sceneOne/bg.png";
import fixedUI from "../../assests/img/sceneOne/FixedUI.png";
import kntHeart5 from "../../assests/img/sceneOne/knt5.png";
import kntHeart4 from "../../assests/img/sceneOne/knt4.png";
import kntHeart3 from "../../assests/img/sceneOne/kntheart3.png";
import kntHeart2 from "../../assests/img/sceneOne/kntheart2.png";
import kntHeart1 from "../../assests/img/sceneOne/kntheart1.png";
import kntHeart0 from "../../assests/img/sceneOne/kntheart0.png";
import kntOne from "../../assests/img/sceneOne/knt1.png";
import kntTwo from "../../assests/img/sceneOne/knt2.png";
import kntThree from "../../assests/img/sceneOne/knt3.png";
import nytOne from "../../assests/img/sceneOne/nyt1.png";
import nytTwo from "../../assests/img/sceneOne/nyt2.png";
//import handCursor from '../../assests/img/sceneOne/hand.png'
import bgMusic from "../../assests/audio/SceneOneBG.mp3";
import BGAudioPlayer from "../../utils/BGAudioPlayer";
import startBG from "../../assests/img/sceneOne/StartScene.png";
import startButton from "../../assests/img/sceneOne/StartButton.png";
import closeButton from "../../assests/img/sceneOne/CloseButton.png";
import catMeow1 from "../../assests/audio/cat-meow-1.mp3";
import catMeow2 from "../../assests/audio/cat-meow-2.mp3";
import catMeow3 from "../../assests/audio/cat-meow-3.mp3";
import angryCatMeow1 from "../../assests/audio/angry-cat.mp3";
import angryCatMeow2 from "../../assests/audio/very-angry-cat.mp3";
import click from "../../assests/audio/click.mp3";
import menuClick from "../../assests/audio/menu-click.mp3";
import angry1 from "../../assests/img/sceneOne/kntAngery1.png";
import angry2 from "../../assests/img/sceneOne/kntAngery2.png";
import angry3 from "../../assests/img/sceneOne/kntAngery3.png";
import question from "../../assests/img/sceneOne/questionMark.png";
import paw1 from "../../assests/img/sceneOne/paw1.png";
import paw2 from "../../assests/img/sceneOne/paw2.png";
import scratch1 from "../../assests/img/sceneOne/scratch1.png";
import scratch2 from "../../assests/img/sceneOne/scratch2.png";

const bounce = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const OuterContainer = styled.div`
  width: 1300px;
  height: 600px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Container = styled.div`
  width: 1000px;
  height: 600px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const MainPanel = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: url(${(props) => (!props.start ? props.startBG : props.bg)})
    no-repeat center center;
  background-size: cover;
  cursor: pointer;
  font-size: 40px;
`;

const FixedUI = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(1);
  ${(props) =>
    props.hover &&
    css`
      filter: brightness(1.1);
    `}
  &:hover {
    filter: brightness(1.1);
  }
`;

const Angry1 = styled.img`
  position: absolute;
  top: 200px;
  left: 200px;
  width: 50px;
  height: 50px;
  object-fit: cover;
  animation: ${bounce} 0.5s ease-in-out infinite, ${fadeIn} 0.3s linear forwards;
`;

const Angry2 = styled.img`
  position: absolute;
  top: 150px;
  left: 400px;
  width: 82px;
  height: 70px;
  object-fit: cover;
  animation: ${bounce} 0.5s ease-in-out infinite, ${fadeIn} 0.3s linear forwards;
`;

const Angry3 = styled.img`
  position: absolute;
  top: 130px;
  left: 260px;
  width: 90px;
  height: 90px;
  object-fit: cover;
  animation: ${bounce} 0.5s ease-in-out infinite, ${fadeIn} 0.3s linear forwards;
`;

const Paw1 = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: auto;
  height: auto;
  object-fit: cover;
  // animation: ${bounce} 0.5s ease-in-out infinite, ${fadeIn} 0.3s linear forwards;
`;

const Paw2 = styled.img`
  position: absolute;
  top: 130px;
  left: 260px;
  width: 90px;
  height: 90px;
  object-fit: cover;
  animation: ${bounce} 0.5s ease-in-out infinite, ${fadeIn} 0.3s linear forwards;
`;

const Scratch1 = styled.img`
  position: absolute;
  top: 130px;
  left: 260px;
  width: 90px;
  height: 90px;
  object-fit: cover;
  animation: ${bounce} 0.5s ease-in-out infinite, ${fadeIn} 0.3s linear forwards;
`;

const Scratch2 = styled.img`
  position: absolute;
  top: 130px;
  left: 260px;
  width: 90px;
  height: 90px;
  object-fit: cover;
  animation: ${bounce} 0.5s ease-in-out infinite, ${fadeIn} 0.3s linear forwards;
`;

const QuestionMark = styled.img`
  position: absolute;
  top: 180px;
  left: 650px;
  width: auto;
  height: auto;
  object-fit: cover;
  opacity: 0;
  ${({ visible }) =>
    visible &&
    css`
      animation: ${bounce} 0.5s ease-in-out infinite,
        ${fadeIn} 0.3s linear forwards;
    `};
`;

const CatOne = styled.img`
  position: absolute;
  top: ${props => props.top}px;
  left: 120px;
  width: ${props => props.width}px; 
  height: ${props => props.height}px; 
  object-fit: cover;
  filter: brightness(1);
  transition: filter 0.3s ease, transform 0.3s ease;
  ${(props) =>
    props.hover &&
    css`
      filter: brightness(1.1);
      transform: scale(1.02);
    `}

  &:hover {
    filter: brightness(1.2);
    transform: scale(1.03);
  }
`;

const CatTwo = styled.img`
  position: absolute;
  top: 160px;
  left: 320px;
  width: 330px;
  height: 280px;
  object-fit: cover;
  filter: brightness(1);
  transition: filter 0.3s ease, transform 0.3s ease;
  ${(props) =>
    props.hover &&
    css`
      filter: brightness(1.1);
      transform: scale(1.02);
    `}

  &:hover {
    filter: brightness(1.2);
    transform: scale(1.03);
  }
`;

const CatOneHeart = styled.img`
  position: absolute;
  top: 422px;
  left: 100px;
  width: 120px;
  height: 18px;
  object-fit: cover;
`;

const CatTwoHeart = styled.img`
  position: absolute;
  top: 187px;
  left: 750px;
  width: 120px;
  height: 18px;
  object-fit: cover;
`;

const StartButton = styled.img`
  position: absolute;
  top: 330px;
  left: 190px;
  width: 180px;
  height: auto;
  object-fit: cover;
  filter: brightness(1);
  transition: filter 0.3s ease, transform 0.3s ease;
  ${(props) =>
    props.hover &&
    css`
      filter: brightness(1.2);
      transform: scale(1.02);
    `}

  &:hover {
    filter: brightness(1.3);
    transform: scale(1.03);
  }
`;

const CloseButton = styled.img`
  position: absolute;
  top: 330px;
  left: 600px;
  width: 180px;
  height: auto;
  object-fit: cover;
  filter: brightness(1);
  transition: filter 0.3s ease, transform 0.3s ease;
  ${(props) =>
    props.hover &&
    css`
      filter: brightness(1.2);
      transform: scale(1.02);
    `}

  &:hover {
    filter: brightness(1.3);
    transform: scale(1.03);
  }
`;

const FirstPage = () => {
  const [start, setStart] = useState(false);
  //KNT mood
  const [catOneMood, setCatOneMood] = useState(5);
  //NYT mood
  const [catTwoMood, setCatTwoMood] = useState(5);
  const [showQuestion, setShowQuestion] = useState(false);

  //knt image and position control
  const [catOneSrc, setCatOneSrc] = useState(kntOne);
  const [catOneWidth, setCatOneWidth] = useState(320);
  const [catOneHeight, setCatOneHeight] = useState(300);
  const [catOneTop, setCatOneTop] = useState(140);

  const [catTwoSrc, setCatTwoSrc] = useState(nytOne);


  //Handle click KNT
  const handleClickCatOne = () => {
    new Audio(click).play();
    setCatOneMood(catOneMood - 0.5);
    if (catOneMood <= 2&&catOneMood >1) {
      new Audio(angryCatMeow1).play();
      setCatOneWidth(320);
      setCatOneHeight(330);
      setCatOneSrc(kntTwo);
      setTimeout(() => {
        setCatOneWidth(320);
        setCatOneHeight(300);
        setCatOneSrc(kntOne);
      }, 800);
    } else if (catOneMood <= 1) {
      new Audio(angryCatMeow2).play();
      setCatOneWidth(300);
      setCatOneHeight(380);
      setCatOneTop(70);
      setCatOneSrc(kntThree);
      setTimeout(() => {
        setCatOneWidth(320);
        setCatOneHeight(300);
        setCatOneTop(140);
        setCatOneSrc(kntOne);
      }, 800);
    } else if (catOneMood <= 4) {
      new Audio(catMeow1).play();
    } else {
      new Audio(catMeow3).play();
    }
  };

  //Handle click NYT
  const handleClickCatTwo = () => {
    //Play click sound
    new Audio(click).play();
    //Change image for 0.8s
    setCatTwoSrc(nytTwo);
    setTimeout(() => {
      setCatTwoSrc(nytOne);
    }, 800);
    //NYT gets angry a bit
    setCatTwoMood(catTwoMood - 0.3);
    //KNT gets angry too
    setCatOneMood(catOneMood - 0.5);
    const audio = new Audio(angryCatMeow2);
    audio.play();
    setTimeout(() => {
      audio.pause();
    }, 1000);
    if (catTwoMood <= 2) {
      new Audio(angryCatMeow2).play();
    } else if (catTwoMood <= 3) {
      new Audio(catMeow1).play();
    } else if (catTwoMood <= 4) {
      new Audio(catMeow2).play();
    } else {
      new Audio(catMeow3).play();
    }
    setShowQuestion(true);
    setTimeout(() => {
      setShowQuestion(false);
    }, 900);
  };

  const handleClickStart = () => {
    setStart(true);
    new Audio(menuClick).play();
  };

  const getKNTHeartImage = (mood) => {
    switch (Math.floor(mood)) {
      case 5:
        return kntHeart5;
      case 4:
        return kntHeart4;
      case 3:
        return kntHeart3;
      case 2:
        return kntHeart2;
      case 1:
        return kntHeart1;
      default:
        return kntHeart0;
    }
  };

  return (
    <OuterContainer>
      <Container>
        <MainPanel start={start} bg={bg} startBG={startBG}>
          {start ? (
            <>
              <BGAudioPlayer src={bgMusic} start={start} />
              <FixedUI src={fixedUI} alt="Fixed UI" />
              <CatTwo src={catTwoSrc} alt="catTwo" onClick={handleClickCatTwo} />
              <CatOne
                src={catOneSrc}
                alt="catOne"
                onClick={handleClickCatOne}
                width={catOneWidth}
                height={catOneHeight}
                top={catOneTop}
              />
              <CatOneHeart
                src={getKNTHeartImage(catOneMood)}
                alt="catOneHeart"
                mood={catOneMood}
              />
              <CatTwoHeart
                src={getKNTHeartImage(catTwoMood)}
                alt="catOneHeart"
                mood={catTwoMood}
              />
              {catOneMood === 3 && <Angry1 src={angry1} alt="Angry1" />}
              {catOneMood === 1 && <Angry2 src={angry2} alt="Angry2" />}
              {catOneMood === 0 ||
                (catOneMood === 2 && <Angry3 src={angry3} alt="Angry3" />)}
              <QuestionMark
                src={question}
                alt="question"
                visible={showQuestion}
              />
              {/* <Paw1 src={paw1} alt="paw1" /> */}
              {/* <Paw2 src={paw2} alt="paw2"  />
              <Scratch1 src={scratch1} alt="scratch1"  />
              <Scratch2 src={scratch2} alt="scratch2" /> */}
            </>
          ) : (
            <div>
              <StartButton
                src={startButton}
                alt="StartButton"
                onClick={handleClickStart}
              />
              <CloseButton src={closeButton} alt="CloseButton" />
            </div>
          )}
        </MainPanel>
      </Container>
    </OuterContainer>
  );
};

export default FirstPage;
