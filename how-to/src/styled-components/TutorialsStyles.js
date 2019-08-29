import styled from 'styled-components';

const TutorialsStyles = styled.div`
    width: 100%;

    .tutorials-container {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;

    .tutorials-content {
        display: flex;
        flex-flow: column nowrap;
        align-items: flex-end;
        width: 50%;
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