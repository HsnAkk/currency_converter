import React, { useEffect, useState } from 'react';
import CanvasJSReact from '../../assests/canvasjs/canvasjs.react';
import useSound from 'use-sound';

import { Wrapper, Loading } from './Chart.style';


const  soundAlert = require('../../alarm.mp3');


let CanvasJSChart = CanvasJSReact.CanvasJSChart;


type PropTypes = {
    currOne: string,
    currTwo: string,
    period: string,
    alertPrice: number,
    refreshCheck: boolean
}

const Chart = ({ currOne, currTwo, period, alertPrice, refreshCheck }: PropTypes) => {
        
    const [options, setOptions] = useState({});
    const [maxPrice, setMaxPrice] = useState(0);
    const [minPrice, setMinPrice] = useState(0);

    const [play, { stop }] = useSound(soundAlert, {allow : 'autoplay'});
    
    
    async function getData(): Promise<any> {

        try {
            let urlChart = '';
            let interval = '';
            let intervalAxisX = 0;
            let intervalTypeAxisX = '';
            let valueFormatStringAxisX = '';
            let maxPrice, minPrice;
        
            switch (period) {
                case '5min':
                    urlChart = `https://www.alphavantage.co/query?function=FX_INTRADAY&from_symbol=${currOne.slice(0, 3)}&to_symbol=${currTwo.slice(0, 3)}&interval=5min&apikey=${process.env.API_KEY}`;
                    interval = '5min';
                    intervalAxisX = 30;
                    intervalTypeAxisX = 'minute';
                    valueFormatStringAxisX = 'HH:mm';
                    break;

                case '60min':
                    urlChart = `https://www.alphavantage.co/query?function=FX_INTRADAY&from_symbol=${currOne.slice(0, 3)}&to_symbol=${currTwo.slice(0, 3)}&interval=60min&apikey=${process.env.API_KEY}`;
                    interval = '60min';
                    intervalAxisX = 5;
                    intervalTypeAxisX = 'hour';
                    valueFormatStringAxisX = 'HH:mm';
                    break;

                case 'Daily':
                    urlChart = `https://www.alphavantage.co/query?function=FX_DAILY&from_symbol=${currOne.slice(0, 3)}&to_symbol=${currTwo.slice(0, 3)}&apikey=${process.env.API_KEY}`;
                    interval = 'Daily';
                    intervalAxisX = 7;
                    intervalTypeAxisX = 'day';
                    valueFormatStringAxisX = 'DD MMM';
                    break;
                
                case 'Weekly':
                    urlChart = `https://www.alphavantage.co/query?function=FX_WEEKLY&from_symbol=${currOne.slice(0, 3)}&to_symbol=${currTwo.slice(0, 3)}&apikey=${process.env.API_KEY}`;
                    interval = 'Weekly';
                    intervalAxisX = 150;
                    intervalTypeAxisX = 'day';
                    valueFormatStringAxisX = 'DD MMM YYYY';
                    break;

                case 'Monthly':
                    urlChart = `https://www.alphavantage.co/query?function=FX_MONTHLY&from_symbol=${currOne.slice(0, 3)}&to_symbol=${currTwo.slice(0, 3)}&apikey=P${process.env.API_KEY}`;
                    interval = 'Monthly';
                    intervalAxisX = 6;
                    intervalTypeAxisX = 'month';
                    valueFormatStringAxisX = 'MMM YYYY';
            };
            
            const response = await fetch(urlChart);
            const data = await response.json();

            const dataArrayChart = data[`Time Series FX (${interval})`];
            
            let keys = Object.keys(dataArrayChart);
            let values: any = Object.values(dataArrayChart);

            let dataPointsArray: any = [];    //for candlestick chart data
            let dataPointsLine: any = [];            //for alertPrice line chart data
            let lineData = {};          //for alertPrice line chart data
            let strDate;

            if (alertPrice) {                                      // it checks whether alert price set up.
                for (let i = 0; i < keys.length; i++) {
                    if (period === '5min' || period === '60min') {
                        strDate = new Date(keys[i].substr(0, 16));
                    } else {
                        strDate = new Date(keys[i]);
                    };
                    let open = parseFloat(values[i]["1. open"]);
                    let high = parseFloat(values[i]["2. high"]);
                    let low = parseFloat(values[i]["3. low"]);
                    let close = parseFloat(values[i]["4. close"]);
                    dataPointsArray.push({ 'x': strDate, 'y': [open, high, low, close] });
                    dataPointsLine.push({ 'x': strDate, 'y': alertPrice });
                };
                maxPrice = parseFloat(values[0]["2. high"]);           // maxPrice is the high of the last candlestick
                minPrice = parseFloat(values[0]["3. low"]);            // minPrice is the low of the last candlestick
                lineData = {
                    type: "line",                              // Alert price line chart settings.
                    showInLegend: true,
                    name: "Alert Price",
                    yValueFormatString: "##0.00000",
                    xValueFormatString: valueFormatStringAxisX,
                    dataPoints: dataPointsLine
                };
                setMaxPrice(maxPrice);
                setMinPrice(minPrice);

            } else {
                for (let i = 0; i < keys.length; i++) {
                    if (period === '5min' || period === '60min') {
                        strDate = new Date(keys[i].substr(0, 16));
                    } else {
                        strDate = new Date(keys[i]);
                    };
                    let open = parseFloat(values[i]["1. open"]);
                    let high = parseFloat(values[i]["2. high"]);
                    let low = parseFloat(values[i]["3. low"]);
                    let close = parseFloat(values[i]["4. close"]);
                    dataPointsArray.push({ 'x': strDate, 'y': [open, high, low, close] });
                };
                lineData = {}; 
            }

            const options = {
                animationEnabled: true,
                theme: "light2", // "light1", "light2", "dark1", "dark2"
                exportEnabled: true,
                zoomEnabled: true,
                zoomType: "xy",
                subtitles: [{
                    text: `${currOne.slice(0, 3)} & ${currTwo.slice(0, 3)} - ${period} Chart`,
                    fontColor: '#ef476f',
                    padding: 10
                }],
                axisX: {
                    interval: intervalAxisX,
                    intervalType: intervalTypeAxisX,
                    valueFormatString: valueFormatStringAxisX,
                    labelAngle: -65,
                    labelAutoFit: true,
                    interlacedColor: "#fcfcfc",
                    labelFontSize: 10,
                    crosshair: {
                        enabled: true,
                        snapToDataPoint: true
                    },
                    margin: 10
                },
                axisY: {
                    includeZero: false,
                    prefix: "",
                    title: `${currTwo}`,
                    titleFontColor: '#ef476f',
                    titleFontSize: 13,
                    gridDashType: "dot",
                    labelFontSize: 11,
                },
                toolTip: {
                    shared: true,
                    fontSize: 12,
                    borderColor: '#ef476f'
                },
                legend: {
                    fontColor: 'red',
                    fontSize: 12
                },
                data: [{
                    type: "candlestick",
                    yValueFormatString: "##0.00000",
                    dataPoints: dataPointsArray            // 5min, 60min, daily, weekly, monthly charts data
                },
                lineData]
            }
            return options
            
        } catch (error) {
            return null
        }
    }
    
    useEffect(() => {
        let callData = async () => {
            let options = await getData();
            setOptions(options);
        }
        callData();

        let interval: any;
        if (refreshCheck) {
            interval = setInterval(() => {
                callData()
            }, 300000)
        }
        return () => clearInterval(interval);

    }, [currOne, currTwo, period, alertPrice, refreshCheck])

   
    useEffect(() => {
        if ((alertPrice >= minPrice) && (alertPrice <= maxPrice) && alertPrice !== 0) {  // it triggers sound alarm, when the alert price is between minPrice and maxPrice
            play();
        };

        setTimeout(() => {
            stop();
        }, 4000)
    }, [maxPrice, minPrice, alertPrice, play, stop])


    return (         
        <Wrapper>
            {
                !options ? <Loading>
                    <h1>Max 5 request per minute ..!</h1>
                    <img src="https://www.drhakanozkulofis.com/images/yukleniyor.gif" alt="loading" />            
                </Loading> : <CanvasJSChart options={options} />
            }
        </Wrapper>
      
    )
}

export default React.memo(Chart);
