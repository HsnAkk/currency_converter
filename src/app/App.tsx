
import { useSelector} from "react-redux";
import React from 'react';
import Form from '../components/form/Form';
import Chart from '../components/chart/Chart';
import Buttons from '../components/buttons/Button';
import { IState } from "../type";
import AlertModal from "../components/alert/AlertModal";
import './App.css';

function App() {

    const { currOne, currTwo, period, showModal, alertPrice, refreshCheck } = useSelector((state: IState) => state.currency);

    return (
        <div className="App">
            <div className="App__content">
                <Form />
            </div>
            <div className="App__content">
                <h1>Price Chart</h1>
                <Buttons />
                <hr />
                <Chart currOne={currOne} currTwo={currTwo} period={period} alertPrice={alertPrice} refreshCheck={refreshCheck} />
            </div>
            {
                showModal ? <AlertModal /> : null
            }
        </div>
    );
}

export default React.memo(App);
