import React, { useContext } from 'react'
import { GlobalContext } from './Context/GlobalState';
const Transaction = ({tran}) => {
   const {deleteTransaction} = useContext(GlobalContext);
   
    const sign = tran.amount < 0 ? '-' : '+';
  return (
    <li className={`m-1 border-r-4 ${sign === '+' &&'border-green-500'} ${sign === '-' && 'border-red-500'}`}>
            {tran.text} <span className='ml-16'>{sign}${Math.abs(tran.amount)}</span><button  onClick={()=>deleteTransaction(tran.id)}>✂</button>
          </li>
  )
}

export default Transaction
