import React, { useState, useEffect, ChangeEvent} from 'react'
import { useSelector, useDispatch } from "react-redux";
import {
    getRateActionCreator,
    getCurrOneActionCreator,
    getCurrTwoActionCreator,
    getCurrOneAmountActionCreator,
    updatePeriodActionCreator
} from "../../features/currency/currencySlice";

import { IState } from "../../type";
import { countries } from '../../data';
import { TiArrowSync } from 'react-icons/ti';
import { Wrapper, Loading } from './Form.style';
import fetchData from '../../fetchData';



const Form = () => {

    const [selectOne, setSelectOne] = useState(false)
    const [selectTwo, setSelectTwo] = useState(false)
    const [isReverse, setIsReverse] = useState(false)

    const dispatch = useDispatch();
    const { currOne, currTwo, currOneAmount, rate, } = useSelector((state: IState) => state.currency);
    
    const handleSelectOneChange = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(getCurrOneActionCreator({ value: e.target.value }));
        setSelectOne(true);
    }

    const handleSelectTwoChange = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(getCurrTwoActionCreator({ value: e.target.value }));
        setSelectTwo(true);
    }

    const handleInputOneChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(getCurrOneAmountActionCreator({ value: +e.target.value }));
    }

    const handleReverse = () => {
        let currOneValue = currOne;
        let currTwoValue = currTwo;
        dispatch(getCurrOneActionCreator({ value: currTwoValue }));
        dispatch(getCurrTwoActionCreator({ value: currOneValue }));
        dispatch(updatePeriodActionCreator({ value: '5min' }));
        setIsReverse(true);   
    }
    
    useEffect(() => {
        // to get CURRENCY_EXCHANGE_RATE
        let getData = async (cOne: string = currOne, cTwo: string = currTwo) => {
            let data = await fetchData(cOne, cTwo);

            dispatch(getRateActionCreator({ value: data }));
        }
        getData();

        if (selectOne) {
            getData(currOne, currTwo);
            setSelectOne(false)
        }
        if (selectTwo) {
            getData(currOne, currTwo)
            setSelectTwo(false)
        }
        if (isReverse) {
            getData(currOne, currTwo)
            setIsReverse(false)
        }
           
    }, [selectOne, selectTwo, isReverse, currOne, currTwo, dispatch])

    return (
        <Wrapper>
            {
                Number.isNaN(+rate / 2) ? <Loading>
                    <h1>Max 5 request per minute ..!</h1>
                    <img src="https://www.drhakanozkulofis.com/images/yukleniyor.gif" alt="loading" />            
                </Loading> : null
            }
            <div className="top-content">
                <p >1 <span>{currOne.slice(0, 3)}</span> = <span>{Number(rate).toFixed(5)}</span> <span>{currTwo.slice(0, 3)}</span> </p>
            </div>
                
            <div className="left1-content">
                <input type="text"
                    className="left1-content__input shadow style"
                    name="currOneAmount"
                    value={currOneAmount}
                    onChange={handleInputOneChange}
                    autoComplete="off"
                />
            </div>

            <div className="left2-content">
                <input type="text"
                    className="left2-content__input shadow style"
                    value={(currOneAmount * +rate).toFixed(2)}
                    readOnly
                />
            </div>
                
            <div className="center1-content ">
                <select className="center1-content__select shadow style"
                    name="countryOne"
                    value={currOne}
                    onChange={handleSelectOneChange}
                >
                    {
                        countries.map(item => <option key={item.id}>{item.code} - {item.country}</option>)
                    }
                </select>
            </div>
            <div className="center2-content">
                <select className="center2-content__select shadow style"
                    name="countryTwo"
                    value={currTwo}
                    onChange={handleSelectTwoChange}
                >
                    {
                        countries.map(item => <option key={item.id}>{item.code} - {item.country}</option>)
                    }
                </select>
            </div>
                
            <div className="right-content center">
                <TiArrowSync onClick={handleReverse} />
            </div>
        </Wrapper>
      
    )
}

export default React.memo(Form);
