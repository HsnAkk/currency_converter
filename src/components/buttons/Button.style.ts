import styled from 'styled-components';


export const Wrapper = styled.div`
    margin: 2rem 0;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 768px) {
        flex-direction : column;
    }

    .left-part {
        align-self: flex-end;

        @media screen and (max-width: 768px) {
            align-self: flex-start;
            margin-bottom: 2rem;
        }
    }
    .right-part {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-end;

        & > div {
            text-align: end;
            padding: .8rem;
            border-radius: 3px;
            margin-bottom: .5rem;
            font-size: 1.2rem;
            font-weight: 600;
            color: white;
            background-image: linear-gradient(130deg, #0096c7, #023e8a);

            .checkbox {
                margin-left: .7rem;
                vertical-align: middle;
                
            }
        }
    }

    .btn {
        width: max-content;
        padding: 1rem 1.5rem;
        border: none;
        outline: none;
        color: white;
        border-radius: 3px;
        background: #ffffff;
        box-shadow:  15px 15px 28px #dedede,
                    -15px -15px 28px #ffffff;

        &:not(:last-child) {
            margin-right: 1.5rem;
        }

        &:hover {
            cursor: pointer;
            box-shadow:  5px 5px 5px #dedede,
                        -5px -5px 5px #ffffff;
        }

        &--orange {
            background-image: linear-gradient(130deg, #ffba08, #e85d04);
          
            &:hover {
                background-image: linear-gradient(130deg, #e85d04, #ffba08);
            }
        }
        &--blue {
            background-image: linear-gradient(130deg, #ade8f4, #023e8a);

            &:hover {
                background-image: linear-gradient(130deg, #023e8a, #ade8f4);
            }
        }
        &--green {
            background-image: linear-gradient(130deg, #72efdd, #34a0a4);

            &:hover {
                background-image: linear-gradient(130deg, #34a0a4, #72efdd);
            }
        }
        &--red {
            background-image: linear-gradient(130deg, #f9bec7, #ff5c8a);

            &:hover {
                background-image: linear-gradient(130deg, #ff5c8a, #f9bec7);
            }
        }
        &--dark {
            background-image: linear-gradient(130deg, #e0aaff, #7b2cbf);

            &:hover {
                background-image: linear-gradient(130deg, #7b2cbf, #e0aaff);
            }
        }
        &--alert {
            background-image: linear-gradient(130deg, #ff8fa3, #c9184a);
            box-shadow:  15px 15px 28px #dedede;
            svg {
                vertical-align: middle;
            }
            span {
                vertical-align: middle;
                padding-left: .5rem;
            }
                    
            &:hover {
                background-image: linear-gradient(130deg, #c9184a, #ff8fa3);
                box-shadow:  5px 5px 5px #dedede,
            }
        }

        @media screen and (max-width: 900px) {
            font-size: 1.3rem;

            padding: 0.8rem 1rem;
            
            &:not(:last-child) {
                margin-right: 0.9rem;
            }
        }

        @media screen and (max-width: 768px) {
            font-size: 1.4rem;
            padding: 0.8rem 1rem;

            &:not(:last-child) {
                margin-right: 1rem;
            }
        }
    }

`;