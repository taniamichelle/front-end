import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import styled from 'styled-components';

const TutorialDiv = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 150px;
    height: 100px;
    margin-right: 25px;
  }

  .tutorial-link {
    margin-bottom: 50px;
}

  a {
    display: flex;
    align-items: center; 
    color: black;
    text-decoration: none;
  }

  p {
    font-size: 24px;
    color: #353535;
  }
`;

const TutorialsList = (props) => {
    console.log(props);
    return (
        <TutorialDiv>
            <div className='tutorial-link'>
                <Link to={`/tutorial/${props.id}`}>
                    <img alt='video' src={require('../../images/video.png')} />
                    <div className='tutorials-title'>
                        <h4>{props.title}</h4>
                    </div>
                    {/* <div className='tutorials-description'>
                        {props.description}
                    </div>
                    <div className='tutorials-helpful'>
                        {props.helpful}
                    </div> */}
                </Link>
            </div>
        </TutorialDiv>
    );
};

export default TutorialsList;