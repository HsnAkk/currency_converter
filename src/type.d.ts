
export interface IData {
    "1. From_Currency Code"?: string
    "2. From_Currency Name"?: string
    "3. To_Currency Code"?: string
    "4. To_Currency Name"?: string
    "5. Exchange Rate"?: string
    "6. Last Refreshed"?: string
    "7. Time Zone"?: string
    "8. Bid Price"?: string
    "9. Ask Price"?: string
}

export interface ICurrency {
    currOne: string,
    currTwo: string,
    currOneAmount: number,
    currTwoAmount: number,
    period: string,
    alertPrice: number,
    showModal: boolean,
    refreshCheck: boolean,
    rate: string
}

export interface IState {
    currency: ICurrency
    chart: IChart
}
