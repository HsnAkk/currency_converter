import styled from 'styled-components';


export const Wrapper = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1000;

    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0,0.5);

    .modal-container {
        width: 100%;
        height: 100%;

        display: flex;
        justify-content: center;
        align-items: flex-start;

        .modal{
            width: 40rem;
            height: 21rem;
            background: #fff;
            margin-top: 3rem;
            border-radius: 5px;

            &__header {
                height: 4rem;
                display: flex;
                border-bottom: 1px solid #f5f5f5;
                
                h5 {
                    width: 90%;
                    text-align: center;
                    font-size: 1.6rem;
                    font-weight: 600;
                    margin: 1rem 0;

                    background: linear-gradient(130deg, #c9184a, #f9bec7);
                    background: -webkit-linear-gradient(130deg, #c9184a, #f9bec7);
                    background-clip: text;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }

                button {
                    width: 10%;
                    padding: .5rem 1rem;
                    font-size: 1.3rem;
                    border: none;
                    outline: none;
                    color: #adb5bd;
                    background: #fff;
                    text-align: right;
                    transition: 0.2s;
                    &:hover {
                        font-size: 1.6rem;
                        font-weight: 700;
                        cursor: pointer;
                    }
                }
            }

            &__body {
                padding: 3rem 5rem;
                height: 11rem;
                border-bottom: 1px solid #f5f5f5;
                font-size: 1.5rem;;

                label {
                    margin-right: 1rem;
                }

                input {
                    font-size: 1.5rem;
                    border: 1px solid #f5f5f5;
                    outline: none;
                    padding: .5rem .5rem .5rem 1rem;
                    width: 20rem
                }
            }

            &__footer {
                height: 6rem;
                display: flex;
                justify-content: center;
                align-items: center;
                button {
                    padding: 0.8rem;
                    font-size: 1.3rem;
                    border: 1px solid #f5f5f5;
                    outline: none;
                    background: linear-gradient(130deg, #c9184a, #f9bec7);
                    background: -webkit-linear-gradient(130deg, #c9184a, #f9bec7);
                    background-clip: text;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    transition: 0.3s;

                    &:hover {
                        background: linear-gradient(90deg, #fff, #adb5bd);
                        background: -webkit-linear-gradient(90deg, #fff, #adb5bd);
                        background-clip: text;
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        cursor: pointer;
                    }

                }
            }
        }
    }

    .shadow {
        border-radius: 1px;
        background: #ffffff;
        box-shadow:  5px 5px 10px #e0e0e0,
                    -5px -5px 10px #ffffff;
        transition: 0.2s;

        &:hover {
            box-shadow:  5px 5px 10px #bfbfbf,
                        -5px -5px 10px #ffffff;
        }
    }
`;