import { useEffect, useState } from "react";



function useCurrencyInfo(currency){

    const [data, setDate] = useState({})

    const api = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    useEffect(()=>{
        fetch(api).then((res)=>res.json())
        .then((res)=>setDate(res[currency]))
    }, [currency])
    
    // console.log(data)

    return data
}

export default useCurrencyInfo