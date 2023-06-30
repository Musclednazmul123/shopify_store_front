
interface Props{
    amount: any,
    currency:any,
    money?:boolean,
    classes?:String
}

export const ProductDetailsPrice = ({amount, currency }: Props)=>{
    const options = { style: 'currency', currency: currency };
    const numberFormat = new Intl.NumberFormat('en-US', options);
    const parts = numberFormat.formatToParts(1)

    return <div className="rounded-lg bg-gray-100 flex py-2 px-3">
        <span className="text-indigo-400 mr-1 mt-1">{parts[0].value}</span>
        <span className="font-bold text-indigo-600 text-3xl">{amount}</span>
    </div>
}

export const CardPrice=({amount, currency, money, classes }: Props)=>{
    const options = { style: 'currency', currency: currency };
    const numberFormat = new Intl.NumberFormat('en-US', options);
    const parts = numberFormat.formatToParts(1)
    return <p className={`text-sm font-medium text-gray-900 ${classes}`}>{parts[0].value}{amount} {money && currency}</p>
}