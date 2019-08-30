import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const TutorialDiv = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;

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

// const tempData = [
//   {
//     img: '', 
//     id: '1',
//     description: 'Karstark Wildlings white walkers maester north Stark Kingslanding tourney of Tully tourney Dragon white walkers the of Stark Littlefinger of warden tourney.'
//   },
//   {
//     img: '',
//     id: '2', 
//     description: 'Giantsblood riverlands Stannis Kingslanding Dragon Winterfell Stannis Winterfell Winterfell Tarly tourney bastard Dragon Renly Barratheon tourney Barratheon north oath Nightswatch.'
//   },
//   {
//     img: '', 
//     id: '3',
//     description: 'Nightswatch south in kingsblood Tarly Casterly rock of Stannis Dragon Stannis bastard duel Stark Dragon warden tourney Tarly Tarly in Kingslanding.'
//   },
// ]

export default function SearchResults(props) {
  console.log(props)
  return (
    <div>
      <h3>{props.filteredTutorials.length} results for: "{props.search}"</h3>
      {
        props.filteredTutorials.map(tutorial => (
        <Link key={tutorial.id} style={{textDecoration: 'none'}} to={`/tutorial/${tutorial.id}`}>
          <TutorialDiv>
            <img alt='video'
              src={require('../../images/video.png')} />
            <p>{tutorial.title}</p>
          </TutorialDiv>
        </Link>
      ))}
    </div>
  )
}