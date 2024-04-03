import React, { useState } from "react";
import styled, { css } from "styled-components";
import One from "../../components/One";
import Two from "../../components/Two";
import bg from "../../assests/img/sceneOne/bg.png";
import fixedUI from "../../assests/img/sceneOne/FixedUI.png";
import kntHeart5 from "../../assests/img/sceneOne/knt5.png";
import kntHeart4 from "../../assests/img/sceneOne/knt4.png";
import kntHeart3 from "../../assests/img/sceneOne/kntheart3.png";
import kntHeart2 from "../../assests/img/sceneOne/kntheart2.png";
import kntHeart1 from "../../assests/img/sceneOne/kntheart0.png";
import kntHeart0 from "../../assests/img/sceneOne/kntheart0.png";
import nytHeart5 from "../../assests/img/sceneOne/nyt5.png";
import kntOne from "../../assests/img/sceneOne/knt1.png";
import nytOne from "../../assests/img/sceneOne/nyt1.png";
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
import angry1 from "../../assests/img/sceneOne/kntAngery1.png";
import angry2 from "../../assests/img/sceneOne/kntAngery2.png";
import angry3 from "../../assests/img/sceneOne/kntAngery3.png";
import question from "../../assests/img/sceneOne/questionMark.png";

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

const CatOne = styled.img`
  position: absolute;
  top: 140px;
  left: 120px;
  width: 320px;
  height: 300px;
  object-fit: cover;
  filter: brightness(1);
  ${(props) =>
    props.hover &&
    css`
      filter: brightness(1.2);
    `}
  &:hover {
    filter: brightness(1.3);
  }
`;

const Angry1 = styled.img`
  position: absolute;
  top: 200px;
  left: 200px;
  width: 50px;
  height: 50px;
  object-fit: cover;
`;

const Angry2 = styled.img`
  position: absolute;
  top: 150px;
  left: 400px;
  width: 70px;
  height: 70px;
  object-fit: cover;
`;

const Angry3 = styled.img`
  position: absolute;
  top: 130px;
  left: 260px;
  width: 90px;
  height: 90px;
  object-fit: cover;
`;

const QuestionMark = styled.img`
  position: absolute;
  top: 180px;
  left: 650px;
  width: auto;
  height: auto;
  object-fit: cover;
`;

const CatTwo = styled.img`
  position: absolute;
  top: 160px;
  left: 310px;
  width: 350px;
  height: 280px;
  object-fit: cover;
  filter: brightness(1);
  ${(props) =>
    props.hover &&
    css`
      filter: brightness(1.2);
    `}
  &:hover {
    filter: brightness(1.3);
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

  ${(props) =>
    props.hover &&
    css`
      filter: brightness(1.2);
    `}
  &:hover {
    filter: brightness(1.3);
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
  ${(props) =>
    props.hover &&
    css`
      filter: brightness(1.2);
    `}
  &:hover {
    filter: brightness(1.3);
  }
`;

const FirstPage = () => {
  const [start, setStart] = useState(false);
  //KNT mood
  const [catOneMood, setCatOneMood] = useState(5);
  //NYT mood
  const [catTwoMood, setcatTwoMood] = useState(5);

  //Handle click KNT
  const handleClickCatOne = () => {
    setCatOneMood(catOneMood - 1);
    if (catOneMood <= 2) {
      new Audio(angryCatMeow2).play();
    } else if (catTwoMood <= 3) {
      new Audio(angryCatMeow1).play();
    } else if (catTwoMood <= 5) {
      new Audio(catMeow1).play();
    } else {
      new Audio(catMeow3).play();
    }
  };

  //Handle click NYT
  const handleClickCatTwo = () => {
    setcatTwoMood(catTwoMood - 0.3);
    if (catTwoMood <= 2) {
      new Audio(angryCatMeow2).play();
    } else if (catTwoMood <= 3) {
      new Audio(catMeow1).play();
    } else if (catTwoMood <= 4) {
      new Audio(catMeow2).play();
    } else {
      new Audio(catMeow3).play();
    }
  };

  const handleClickStart = () => {
    setStart(true);
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
              <CatTwo src={nytOne} alt="catTwo" onClick={handleClickCatTwo} />
              <CatOne src={kntOne} alt="catOne" onClick={handleClickCatOne} />
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
              {/* <Angry1 src={angry1} alt="Angry1" />
              <Angry2 src={angry2} alt="Angry2" />
              <Angry3 src={angry2} alt="Angry3" />
              <QuestionMark src={question} alt="question" /> */}
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
