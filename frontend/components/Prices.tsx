
interface Props{
    amount: any,
    currency:any
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