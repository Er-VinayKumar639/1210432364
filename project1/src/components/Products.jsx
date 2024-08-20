import React, { useEffect, useState } from 'react'
import Axios from '../utils/Axios'
import { useParams, useSearchParams } from 'react-router-dom';


const COMPANIES = [
    "AMZ", "FLP","SNP", "MYN","AZO"
]

const CATEGORIES = [
    "Phone", "Computer", "TV", "Earphone", "Tablet", "Charger", "Mouse", "Keypad", "Bluetooth", "Pendrive", "Remote", "Speaker", "Headset", "Laptop", "PC"
]





export default function Products() {
    const [products, setProducts] =  useState([]);

    const params = useParams()
    const [searchParams, setSearchParams] = useSearchParams()

    const [ctg, setCtg] = useState("")
    const [cmp, setCmp] = useState("")
    // useEffect(() => {
    //     (async()=>{
    //         let res = Axios.agent.get(`companies/:companyname/categories/:categoryname/products?top=n&minPri ce=p&maxPrice=q`)
    //     })()
    // },[]);


  return (
    <div className='h-screen'>
        <div className=''>Filter</div>
        <div className=''>
            <span>Select Company: </span>

            <select value={cmp} onChange={(e)=> setCmp(e.target.value)}>
                {
                    COMPANIES.map((company, i)=> <option value={company} key={i}>{company}</option>)
                }
            </select>
        </div>

        <div>
        <span>Select Company: </span>
            <select value={ctg} onChange={(e)=> setCtg(e.target.value)}>
                {
                    CATEGORIES.map((company, i)=> <option value={company} key={i}>{company}</option>)
                }
            </select>
        </div>
    </div>
  )
}
