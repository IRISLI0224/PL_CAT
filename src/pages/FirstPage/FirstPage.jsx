import React, { useState } from "react";
import styled from "styled-components";
import One from "../../components/One";
import Two from "../../components/Two";
import bg from "../../assests/img/sceneOne/bg.png";
import fixedUI from "../../assests/img/sceneOne/FixedUI.png";
import kntHeart5 from "../../assests/img/sceneOne/knt5.png";
import nytHeart5 from "../../assests/img/sceneOne/nyt5.png";
import kntOne from "../../assests/img/sceneOne/knt1.png";
import nytOne from "../../assests/img/sceneOne/nyt1.png";
//import handCursor from '../../assests/img/sceneOne/hand.png'
//import bgMusic from "../../assests/audio/sceneOne.mp3";
import BGAudioPlayer from "../../utils/BGAudioPlayer";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainPanel = styled.div`
  position: relative;
  width: 95%;
  height: 95%;
  background: url(${bg}) no-repeat center center;
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
  top: 0;
  left: 0;
  width: 95%;
  height: 95%;
  object-fit: cover;
`;

const CatTwo = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 95%;
  height: 95%;
  object-fit: cover;
`;

const CatOneHeart = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const CatTwoHeart = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Title = styled.h1`
  color: #ffffff;
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
`;

const FirstPage = () => {
  //KNT mood
  const [catOneMood, setCatOneMood] = useState(5);
  //NYT mood
  const [catTwoMood, setcatTwoMood] = useState(5);

  //Handle click KNT
  const handleClickCatOne = () => {};

  //Handle click NYT
  const handleClickCatTwo = () => {
    console.log('click')
  };

  return (
    <Container>
      <MainPanel>
        <BGAudioPlayer src={'../../assests/audio/sceneOne.mp3'} />
        <FixedUI src={fixedUI} alt="Fixed UI" />
        <CatTwo src={nytOne} alt="catTwo" onClick={handleClickCatTwo} />
        <CatOne src={kntOne} alt="catOne" onClick={handleClickCatOne} />

        <CatOneHeart src={kntHeart5} alt="catOneHeart" />
        <CatTwoHeart src={nytHeart5} alt="catOneHeart" />
      </MainPanel>
    </Container>
  );
};

export default FirstPage;
