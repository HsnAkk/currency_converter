import styled from 'styled-components';



export const Loading = styled.div`
    width: 100%;
    height: 40rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(255,255,255,0.95); 
    position: absolute;
    z-index: 100;

    h1 {
        font-size: 1.5rem;
        margin-bottom: 4rem;
        background: linear-gradient(130deg, #c9184a, #ff5c8a);
        background: -webkit-linear-gradient(130deg, #c9184a, #ff5c8a);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    img {
        width: 10%;
    }

    @media screen and (max-width: 768px) {
        height: 50rem;
    }
`;

export const Wrapper = styled.div`
    position: relative;
    height: 40rem;
    
    @media screen and (max-width: 768px) {
        height: 50rem;
    }

`;