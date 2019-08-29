import styled from 'styled-components';

const TutorialsStyles = styled.div`
    width: 100%;

    .tutorials-container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
  
        h1 {
            margin: 0;
        }

        .back-btn {
            text-decoration: none;
            color: black;
            font-size: 18px;
            font-weight: bold;
            align-self: flex-start;
            display: flex;
            align-items: center;
        
            .back-arrow {
                width: 40px;
                transform: scaleX(-1);
            }
        }

        .tutorials-content {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .video-img {
            width: 550px;
            height: 300px;
            border: 10px solid #333a4d;
            border-radius: 15px;
            margin: 40px 0 15px 0;
        }

        .tutorials-middle-content {
            width: 550px;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            padding: 0 15px;

            button {
                border: none;
                border-radius: 5px;
                padding: 8px 12px 10px 12px;
                font-size: 18px;
                font-weight: bold;
                height: 35px;
                cursor: pointer;
                outline: none;
            }

            .save-btn {
                background-color: #0036cc;
                color: white;
            }
    
            .help-btns {
                display: flex;
                width: 35%;
                justify-content: space-between;

                .btns-count {
                    display: flex;
                    flex-direction: column;
                    align-items: center;

                    p {
                        font-size: 14px;
                        border: 2px solid #626e90;
                        border-radius: 2px;
                        margin: 6px;
                        padding: 0px 3px;
                    }
                }

                .helpful-btn {
                    background-color: #b3c7ff;
                    color: #121621;
                }
                
                .helpful-count {
                    background-color: #b3c7ff;
                }

                .not-helpful-btn {
                    background-color: #000e33;
                    color: white;
                    font-size: 14px;
                    padding: 2px 15px;
                }
            }    
        }

        .tutorials-bottom-content {
            width: 85%;

            h4 {
                font-weight: bold;
                color: gray;
                margin-bottom: 0px;
            }

            .tutorial-desc {
                border: 2px solid gray;
                margin: 5px 0;
                background-color: white;
                padding: 10px;
            }
        }

        .get-tutorials-btn {
            background-color: #0036cc;
            padding: 10px 15px;
            font-weight: bold;
            font-size: 18px;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            outline: none;
            margin-top: 20px;
        }
    }
`;

export default TutorialsStyles;