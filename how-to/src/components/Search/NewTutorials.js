import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const TutorialDiv = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 150px;
    height: 100px;
    margin-right: 25px;
  }

  p {
    font-size: 24px;
    color: #353535;
  }
`;

const tempData = [
  {
    img: '', 
    id: '1',
    description: 'I love cheese, especially croque monsieur macaroni cheese. Edam lancashire gouda manchego queso blue castello feta gouda'
  },
  {
    img: '',
    id: '2', 
    description: 'I love cheese, especially croque monsieur macaroni cheese. Edam lancashire gouda manchego queso blue castello feta gouda'
  },
  {
    img: '', 
    id: '3',
    description: 'I love cheese, especially croque monsieur macaroni cheese. Edam lancashire gouda manchego queso blue castello feta gouda'
  },
]

export default function NewTutorials() {
  return (
    <div>
      <h3>What's New?</h3>
      {
        tempData.map(tutorial => (
        <Link key={tutorial.id} style={{textDecoration: 'none'}} to='/tutorial'>
          <TutorialDiv>
            <img alt='video'
              src={require('../../images/video.png')} />
            <p>{tutorial.description}</p>
          </TutorialDiv>
        </Link>
      ))}
    </div>
  )
}