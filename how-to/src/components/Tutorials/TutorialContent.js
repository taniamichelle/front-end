import React from 'react';
import { withRouter } from 'react-router'; 
import { Link } from 'react-router-dom';

import TutorialsStyles from '../../styled-components/TutorialsStyles';

function TutorialContent(props) {  
  const id = props.location.pathname.match(/\d+$/);

  return props.tutorial.id === Number(id[0]) ? (
    <TutorialsStyles>
      <div className='tutorials-container'>
        <h1>{props.tutorial.title}</h1>
        <Link className='back-btn' to='/search'><img className='back-arrow' alt='back arrow' src={require('../../images/filter-arrow.png')} />Back</Link>
        <div className='tutorials-content'>
          <img className='video-img' src={require("../../images/video.png")} />
          <div className='tutorials-middle-content'>
            <button className='save-btn'>Save!</button>
            <div className='help-btns'>
              <div className='btns-count'>
                <button className='helpful-btn'>Helpful!</button>
                <p className='helpful-count'>{props.tutorial.helpful}</p>
              </div>
              <div className='btns-count'>
                <button className='not-helpful-btn'>Didn't<br />help...</button>
                <p not-helpful-count>0</p>
              </div>
            </div>
          </div>
          <div className='tutorials-bottom-content'>
            <h4>Description</h4>
            <p className='tutorial-desc'>
              {props.tutorial.description}
            </p>
          </div>
        </div>
      </div>
    </TutorialsStyles>
  ) : null;
}

export default withRouter(TutorialContent);