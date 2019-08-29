import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {newTutorialData} from '../../actions/TutorialData';
import TutorialsList from '../Tutorials/TutorialsList';
import {connect} from 'react-redux';

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

const NewTutorials = (props) => {

  return (
    <div>
      <h3>What's New?</h3>
        <TutorialDiv>
          <div className='tutorials-list'>
            {props.tutorialsData && props.tutorialsData.map(tutorial => {
                  return (
                      <TutorialsList title={tutorial.title} 
                                      description={tutorial.description} 
                                      helpful={tutorial.helpful}  
                      />)}
                  )}
          </div>
        </TutorialDiv>
    </div>
  )
}
const mapStateToProps = state => {
  return {
    tutorialsData: state.tutorialReducer.tutorialsData
  };
};

export default connect (mapStateToProps, newTutorialData)(NewTutorials);


// const TutorialDiv = styled.div`
//   display: flex;
//   align-items: center;

//   img {
//     width: 150px;
//     height: 100px;
//     margin-right: 25px;
//   }

//   p {
//     font-size: 24px;
//     color: #353535;
//   }
// `;

// const tempData = [
//   {
//     img: '', 
//     id: '1',
//     description: 'I love cheese, especially croque monsieur macaroni cheese. Edam lancashire gouda manchego queso blue castello feta gouda'
//   },
//   {
//     img: '',
//     id: '2', 
//     description: 'I love cheese, especially croque monsieur macaroni cheese. Edam lancashire gouda manchego queso blue castello feta gouda'
//   },
//   {
//     img: '', 
//     id: '3',
//     description: 'I love cheese, especially croque monsieur macaroni cheese. Edam lancashire gouda manchego queso blue castello feta gouda'
//   },
// ]

// export default function NewTutorials() {
//   return (
//     <div>
//       <h3>What's New?</h3>
//       {
//         tempData.map(tutorial => (
//         <Link key={tutorial.id} style={{textDecoration: 'none'}} to='/tutorial'>
//           <TutorialDiv>
//             <img alt='video'
//               src={require('../../images/video.png')} />
//             <p>{tutorial.description}</p>
//             <div className='tutorials-list'>
//               <Tutorials />
//             </div>
//           </TutorialDiv>
//         </Link>
//       ))}
//     </div>
//   )
// }

// import React, {useState, useEffect} from 'react';
// import { Link } from 'react-router-dom';
// import styled from 'styled-components';
// import TutorialsList from '../Tutorials/TutorialsList';
// import { getTutorialData } from '../../actions/TutorialData';
// import {connect} from 'react-redux';

// const TutorialDiv = styled.div`
//   display: flex;
//   align-items: center;

//   img {
//     width: 150px;
//     height: 100px;
//     margin-right: 25px;
//   }

//   p {
//     font-size: 24px;
//     color: #353535;
//   }
// `;

// const tempData = [
//   {
//     img: '', 
//     id: '1',
//     description: 'I love cheese, especially croque monsieur macaroni cheese. Edam lancashire gouda manchego queso blue castello feta gouda'
//   },
//   {
//     img: '',
//     id: '2', 
//     description: 'I love cheese, especially croque monsieur macaroni cheese. Edam lancashire gouda manchego queso blue castello feta gouda'
//   },
//   {
//     img: '', 
//     id: '3',
//     description: 'I love cheese, especially croque monsieur macaroni cheese. Edam lancashire gouda manchego queso blue castello feta gouda'
//   },
// ]