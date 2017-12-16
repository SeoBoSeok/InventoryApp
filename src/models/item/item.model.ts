import { HistoryItem } from "./item.historymodel";

export interface Item {
    key?: string,
    name: string,
    quantity: number,
    price: number,
    desc: string,
    history?: [ HistoryItem ],
    star: number,
    date: string
}