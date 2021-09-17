import React, {useState, MouseEvent, ChangeEvent} from 'react'
import { useDispatch } from "react-redux";
import { showModalActionCreater, getAlertPriceActionCreater } from "../../features/currency/currencySlice";
import { Wrapper } from './AlertModal.style';


const AlertModal = () => {

    const[alert, setAlert] = useState(0)

    const dispatch = useDispatch();
  
    const handleClick = (e: MouseEvent<HTMLElement> ) => {
        e.preventDefault();
        let classNames = ['close', 'close-btn shadow', 'modal-container'];
        if (classNames.includes((e.target as HTMLElement).className)) {
            if ((e.target as HTMLElement).className === 'close-btn shadow') {
                dispatch(getAlertPriceActionCreater({ value: alert}));
            }
            dispatch(showModalActionCreater({ value: false }));
        }
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setAlert(+e.target.value);
    }

    return (
        <Wrapper>
            <div className="modal-container" onClick={handleClick}>
                <form className="modal">
                    <div className="modal__header">
                        <h5>Set Alert Price</h5>
                        <button type="button" className="close">X</button>
                    </div>
                    <div className="modal__body">                        
                        <label >Alert Price</label>
                        <input type="number" className="shadow" defaultValue={ alert} onChange={handleChange}/>                  
                    </div>
                    <div className="modal__footer">
                        <button type="submit" className="close-btn shadow" >Set & Close</button>
                    </div>
                </form>
            </div>
        </Wrapper>
    )
}

export default AlertModal
