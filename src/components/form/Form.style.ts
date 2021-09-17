import styled from 'styled-components';

export const Loading = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(255,255,255,0.95); 
    position: absolute;
    z-index: 100;

    h1 {
        font-size: 1.5rem;
        margin-bottom: 2rem;
        background: linear-gradient(130deg, #c9184a, #ff5c8a);
        background: -webkit-linear-gradient(130deg, #c9184a, #ff5c8a);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    img {
        width: 10%;
    }
`;


export const Wrapper = styled.form`
    position: relative;
    width: 100%;
    display: grid;
    grid-template-columns: 13rem 1fr 6rem;
    grid-template-areas:
                        "main main main"
                        "left1 cnt1 right"
                        "left2 cnt2 right";
    
    gap: 2rem;

    @media screen and (max-width: 768px) {
        grid-template-columns: 9rem 1fr 5rem;        
        gap: 1rem;
    }
    
    .top-content {
        grid-area: main;
        text-align: center;
        font-size: 3.2rem;
        margin-bottom: 1rem;

        & p > span:nth-of-type(odd) {
            font-size: 1.8rem;
        }

        @media screen and (max-width: 768px) {
            font-size: 2.5rem;

            & p > span:nth-of-type(odd) {
                font-size: 1.6rem;
            }
        }
    }
    .left1-content {
        grid-area: left1;
        

        &__input {
            text-align: end;
        }
    }
    .left2-content {
        grid-area: left2;

        &__input {
            text-align: end;
        }
    }
    .center1-content {
        grid-area: cnt1;
    }
    .center2-content {
        grid-area: cnt2;
    }
    .right-content {
        grid-area: right;
        justify-self: center;
        align-self: center;
        width: 4.5rem;
        height: 4.5rem;
        font-size: 2.2rem;
        color: dodgerblue;
        border-radius: 2px;
        background: #ffffff;
        box-shadow:  10px 10px 20px #b8b8b8,
                    -10px -10px 20px #ffffff;
        transition: .2s;

        &:hover {
            font-size: 2.8rem;
            box-shadow:  4px 4px 9px #b8b8b8,
                    -4px -4px 9px #ffffff;
            cursor: pointer;
        }

        @media screen and (max-width: 768px) {
           
            width: 4rem;
            height: 4rem;
            font-size: 2rem;
        
            &:hover {
                font-size: 2.5rem;
               
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

    .style {
        width: 100%;
        padding: 1rem 1.3rem;
        border: none;
        outline: none;
        font-size: 1.45rem;
    }

`;