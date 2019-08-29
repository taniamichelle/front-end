import styled from 'styled-components';

const UploadStyles = styled.div`
    width: 100%;

    .upload-container {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;

    .file-select-container {
        h3 {
            margin: 3px 0;
            color: gray;
        }
    }

    .upload-content {
        display: flex;
        flex-flow: column nowrap;
        align-items: flex-end;
        width: 50%;

        .upload-form {
            width: 100%;
            margin: 0;

            form {
                display: flex;
                flex-direction: column;
                width: 100%;
                height: 620px;
                justify-content: space-between;

                legend {
                    font-size: 18px;
                    font-weight: bold;
                }
    
                input {
                    width: 100%;
                    box-sizing: border-box;
                    border: 2px solid #cacbbe;
                    font-size: 18px;
                    padding: 10px 5px;
                    border-radius: 3px;
                }

                textarea {
                    box-sizing: border-box;
                    width: 100%;
                }

                button {
                    width: 40%;
                    font-size: 30px;
                    align-self: flex-end;
                }
            }

            // .name-field {
            //     input {
            //         margin-top: 0.4rem;
            //         margin-bottom: 2rem;
            //         border: 2px solid gray;
            //         border-radius: 3px;
            //         padding: 5px 10px;
            //         font-size: 18px;
            //         width: 100%;
            //         height: 3rem;
            //     }
            // }
        
            // .description-field {
            //     input {
            //         margin-top: 0.4rem;
            //         margin-bottom: 2rem;
            //         border: 2px solid gray;
            //         border-radius: 3px;
            //         padding: 5px 10px;
            //         font-size: 18px;
            //         width: 100%;
            //         height: 11rem;
            //     }
            // }
            
            // .keywords-field {
            //     input {
            //         margin-top: 0.4rem;
            //         margin-bottom: 2rem;
            //         margin-right: 4rem;
            //         border: 2px solid gray;
            //         border-radius: 3px;
            //         padding: 5px 10px;
            //         font-size: 18px;
            //         width: 100%;
            //         height: 3rem;
            //     }
            // }
        
            // .url-field {
            //     input {
            //         margin-top: 0.4rem;
            //         margin-bottom: 2rem;
            //         margin-right: 4rem;
            //         border: 2px solid gray;
            //         border-radius: 3px;
            //         padding: 5px 10px;
            //         font-size: 18px;
            //         width: 100%;
            //         height: 3rem;
            //     }
            // }
        
            button {
                cursor: pointer;
                font-size: 20px;
                font-weight: bold;
                color: #c4c4be;
                background-color: #898a7d;
                border: none;
                padding: 10px 20px;
                border-radius: 3px;
                // margin-left: 20rem;
            }
        

        }
    }
    
    // .name-field {
    //     input {
    //         margin-top: 0.4rem;
    //         margin-bottom: 2rem;
    //         margin-right: 4rem;
    //         border: 2px solid gray;
    //         border-radius: 3px;
    //         padding: 5px 10px;
    //         font-size: 18px;
    //         width: 100%;
    //         height: 3rem;
    //     }
    // }

    // .description-field {
    //     input {
    //         margin-top: 0.4rem;
    //         margin-bottom: 2rem;
    //         margin-right: 4rem;
    //         border: 2px solid gray;
    //         border-radius: 3px;
    //         padding: 5px 10px;
    //         font-size: 18px;
    //         width: 100%;
    //         height: 11rem;
    //     }
    // }
    
    // .keywords-field {
    //     input {
    //         margin-top: 0.4rem;
    //         margin-bottom: 2rem;
    //         margin-right: 4rem;
    //         border: 2px solid gray;
    //         border-radius: 3px;
    //         padding: 5px 10px;
    //         font-size: 18px;
    //         width: 100%;
    //         height: 3rem;
    //     }
    // }

    // .url-field {
    //     input {
    //         margin-top: 0.4rem;
    //         margin-bottom: 2rem;
    //         margin-right: 4rem;
    //         border: 2px solid gray;
    //         border-radius: 3px;
    //         padding: 5px 10px;
    //         font-size: 18px;
    //         width: 100%;
    //         height: 3rem;
    //     }
    // }

    // button {
    //     cursor: pointer;
    //     font-size: 20px;
    //     font-weight: bold;
    //     color: #c4c4be;
    //     background-color: #898a7d;
    //     border: none;
    //     padding: 10px 20px;
    //     border-radius: 3px;
    //     margin-left: 20rem;
    // }

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