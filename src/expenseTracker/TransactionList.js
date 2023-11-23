import React, { useContext } from 'react'
import { GlobalContext } from './Context/GlobalState';
import Transaction from './Transaction';
const TransactionList = () => {
   const {transactions} =  useContext(GlobalContext);
  
  return (
    <div className='flex flex-col w-64 mt-3'>
      <h3 className='font-bold'>History</h3>
      <ul >
        { transactions.length > 0 ?
            transactions.map((tran)=> <Transaction key={tran.id} tran={tran}/>) : 'No Transaction Found'
        }
        
      </ul>
    </div>
  )
}

export default TransactionList

