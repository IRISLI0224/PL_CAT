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

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-bottom: 56.25%;
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
`;

const CatOne = styled.img`
  position: absolute;
  top: 18vh;
  left: 10vw;
  width: 32vw;
  height: 60vh;
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

const CatTwo = styled.img`
  position: absolute;
  top: 25vh;
  left: 33vw;
  width: 33vw;
  height: 52vh;
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
  top: 75vh;
  left: 10vw;
  width: 11.5vw;
  height: 3.5vh;
  object-fit: cover;
`;
const CatTwoHeart = styled.img`
  position: absolute;
  top: 27vh;
  left: 75vw;
  width: 11.5vw;
  height: 3.5vh;
  object-fit: cover;
`;

const StartButton = styled.img`
  position: absolute;
  top: 55vh;
  left: 19vw;
  width: 15vw;
  height: 12vh;
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
  top: 55vh;
  left: 63vw;
  width: 15vw;
  height: 12vh;
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
    setCatOneMood(catOneMood-1)
  };

  //Handle click NYT
  const handleClickCatTwo = () => {
    setcatTwoMood(catTwoMood-0.3)
    console.log("click");
  };

  const handleClickStart = () => {
    setStart(true)
  };

  return (
    <Container>
      <MainPanel start={start} bg={bg} startBG={startBG}>
        {start ? (
          <>
            <BGAudioPlayer src={bgMusic} start={start}/>
            <FixedUI src={fixedUI} alt="Fixed UI" />
            <CatTwo src={nytOne} alt="catTwo" onClick={handleClickCatTwo} />
            <CatOne src={kntOne} alt="catOne" onClick={handleClickCatOne} />
            <CatOneHeart src={kntHeart5} alt="catOneHeart" mood={catOneMood}/>
            <CatTwoHeart src={nytHeart5} alt="catOneHeart" mood={catTwoMood}/>
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
  );
};

export default FirstPage;
