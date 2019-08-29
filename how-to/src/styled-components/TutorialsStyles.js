import styled from 'styled-components';

const TutorialsStyles = styled.div`
    width: 100%;

    .tutorials-container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        border: 1px solid blue;
  
        img {
            width: 550px;
            border: 10px solid #333a4d;
            margin: 0;
            padding: 0;
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

export default TutorialsStyles;