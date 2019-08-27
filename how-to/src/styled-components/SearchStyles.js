import styled from 'styled-components';

const SearchStyles = styled.div`
  h2 {
    font-size: 36px;
  }
  
  h3 {
    font-size: 30px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    .searchbar {
      width: 100%;
      display: flex;
      justify-content: center;

      input {
        width: 95%;
        border: 2px solid gray;
        border-right: none;
        border-radius: 3px;
        padding: 5px 10px;
        font-size: 18px;
      }

      img {
        width: 5%;
        border: 2px solid #cbcbcb;
        cursor: pointer;
      }
    }

    .buttons {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
  
      button {
        cursor: pointer;
        color: white;
        border: none;
        outline: none;
        font-size: 14px;
        font-weight: bold;
        padding: 5px;
        border-radius: 3px;
      }
  
      .resetBtn {
        background-color: #000e33;
      }
    
      .requestBtn {
        background-color: #0036cc;
      }
    }
  }
`;

export default SearchStyles;