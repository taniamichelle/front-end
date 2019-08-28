import styled from 'styled-components';

const UploadStyles = styled.div`
    width: 100%;

    .upload-container {
        display: flex;
        justify-content: space-between;
        align-items: center;

    .file-select-container {
        h3 {
            margin: 3px 0;
            color: gray;
        }
    }

    .upload-content {
        display: flex;
        flex-flow: column nowrap;

    }
    
    .name-field {
        input {
            margin-top: 0.4rem;
            margin-bottom: 2rem;
            margin-right: 4rem;
            border: 2px solid gray;
            border-radius: 3px;
            padding: 5px 10px;
            font-size: 18px;
            width: 410px;
            height: 3rem;
        }
    }

    .description-field {
        input {
            margin-top: 0.4rem;
            margin-bottom: 2rem;
            margin-right: 4rem;
            border: 2px solid gray;
            border-radius: 3px;
            padding: 5px 10px;
            font-size: 18px;
            width: 410px;
            height: 11rem;
        }
    }
    
    .keywords-field {
        input {
            margin-top: 0.4rem;
            margin-bottom: 2rem;
            margin-right: 4rem;
            border: 2px solid gray;
            border-radius: 3px;
            padding: 5px 10px;
            font-size: 18px;
            width: 410px;
            height: 3rem;
        }
    }

    .url-field {
        input {
            margin-top: 0.4rem;
            margin-bottom: 2rem;
            margin-right: 4rem;
            border: 2px solid gray;
            border-radius: 3px;
            padding: 5px 10px;
            font-size: 18px;
            width: 410px;
            height: 3rem;
        }
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
        margin-left: 20rem;
    }

    ul {
        padding: 0;

        li {
            margin: 2rem;
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

export default UploadStyles;