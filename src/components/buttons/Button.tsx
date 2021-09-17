import React, {MouseEvent, ChangeEvent} from 'react'
import {useDispatch } from "react-redux";
import { updatePeriodActionCreator, showModalActionCreater, refreshCheckActionCreater } from "../../features/currency/currencySlice";
import { FiBell } from 'react-icons/fi';
import { Wrapper } from './Button.style';



const Button = () => {

    const dispatch = useDispatch();
   
    const handleClick = (e: MouseEvent<HTMLButtonElement>, value: string) => {
        e.preventDefault();

        switch(value) {
            case '5min':
                dispatch(updatePeriodActionCreator({value: '5min'}))
                break;
    
            case '60min':          
                dispatch(updatePeriodActionCreator({value: '60min'}))
                break;
    
            case 'Daily':
                dispatch(updatePeriodActionCreator({value: 'Daily'}))
                break;
            
            case 'Weekly':                
                dispatch(updatePeriodActionCreator({value: 'Weekly'}))
                break;
    
            case 'Monthly':
                dispatch(updatePeriodActionCreator({value: 'Monthly'}))
        };
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(refreshCheckActionCreater({ value: e.target.checked }));
    }

    const handleShowModal = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        dispatch(showModalActionCreater({ value: true }));
    }



    return (
        <Wrapper>
            <div className="left-part">
                <button className="btn btn--orange" onClick={(e) => handleClick(e, '5min')}> 5min </button>
                <button className="btn btn--blue" onClick={(e) => handleClick(e, '60min')}> 60min </button>
                <button className="btn btn--green" onClick={(e) => handleClick(e, 'Daily')}> Daily </button>
                <button className="btn btn--red" onClick={(e) => handleClick(e, 'Weekly')}> Weekly </button>
                <button className="btn btn--dark" onClick={(e) => handleClick(e, 'Monthly')}> Monthly </button>
            </div>
            <div className="right-part">
                <div>
                    Refresh every 5 mins.
                    <input type="checkbox" className="checkbox" onChange={handleChange} />
                </div>
                <button className="btn btn--alert" onClick={handleShowModal}>
                    <FiBell />
                    <span> Alert</span>
                </button>
            </div>
        </Wrapper>
    )
}

export default React.memo(Button)
