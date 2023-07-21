import React from 'react';
import styled from 'styled-components/macro';
import { getSizeCategorie, getSizePrice } from '../../utils/unsplashApi';
import Like from '../../images/width.png';
const Card = ({ image, description, likes, user, userImage, userLink, imageRealWidth }) => {
  function truncatePhrase(phrase) {
    const words = `${phrase}`.split(' ');
    const truncatedWords = words.slice(0, 8);
    const truncatedPhrase = truncatedWords.join(' ');
    return truncatedPhrase;
  }
  return (
    <Wrapper>

      <ImgCard alt={description} src={image}></ImgCard>

      <DescriptionCard>

        <FirstSection>
          <Text>
            {truncatePhrase(`${description}`)}
          </Text>
          {'   ' }
        </FirstSection>
        <SecondSection>
          <div style={{ display: 'flex', flexDirection: 'column', justifyItems: 'center', alignItems: 'center', gridAutoColumns: '0.5px', marginLeft: '80px' }}>
            <TextCateg>
              {getSizeCategorie(imageRealWidth / 10)}

            </TextCateg>

            <ImgCardContainer alt="like count" src={Like} />
            <Text>
              {imageRealWidth / 10} cm
            </Text>

          </div>

        </SecondSection>

      </DescriptionCard>

    </Wrapper>
  );
};

export default Card;

const Wrapper = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid #d1d1d1;
  border-radius:10px;
  box-sizing: border-box;
`;

const ImgCard = styled.img`
  width: 100%;
  padding: 5px 4px;
  
`;

const DescriptionCard = styled.div`
display: flex;
font-size:small
width: 100%;

  
  height:auto
  box-sizing: border-box;
  padding: 5px 4px;

  @media screen and (max-width: 400px) {
    padding: 12px 10px;
  }
`;





const ImgCardContainer = styled.img`
  width: 24px;
  height: 24px;
  margin-bottom : -15px
`;


const FirstSection = styled.div`
  flex: 0 0 60%;
  padding: 2px;
`;

const SecondSection = styled.div`
  display:flex;

  flex-direction:column
  padding: 5px;
  font-size:small

  
`;

const Text = styled.p`
  overflow-wrap: break-word;
  font-weight: bold;
  
  @media screen and (max-width: 400px) {
    font-size: 9px;
  }
`;
const TextCateg = styled.p`
  overflow-wrap: break-word;
  font-weight: bold;
  padding: 5px ;
  border: 1px solid #d1d1d1;
  border-radius:8px;
  background:#d1d1d1;


  @media screen and (max-width: 400px) {
    font-size: 9px;
  }
`;
