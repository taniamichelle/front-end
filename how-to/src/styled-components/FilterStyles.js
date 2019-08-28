import styled from 'styled-components';

const FilterStyles = styled.div`
  width: 100%;

  .searchfields {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h4 {
      margin: 3px 0;
    }

    input {
      border: 2px solid gray;
      border-radius: 3px;
      padding: 5px 10px;
      font-size: 18px;
      width: 180px;
    }

    button {
      cursor: pointer;
      font-size: 20px;
      font-weight: bold;
      color: #c4c4be;
      background-color: #898a7d;
      border: none;
      padding: 10px 20px;
      border-radius: 3px;
    }
  }

  ul {
    padding: 0;

    li {
      width: 170px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 20px;

      img {
        width: 50px;
      }  
    }
  }

  .categories {
    display: flex;
    align-items: center;
  }

  .subwrap {
    margin-left: 30px;
  }

  .subs {
    max-height: 300px;
    width: 500px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    p {
      font-size: 18px;
      margin: 9px 0;
    }
  }
`;

export default FilterStyles;