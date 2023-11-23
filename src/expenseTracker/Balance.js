import React, { useContext } from 'react'
import { GlobalContext } from './Context/GlobalState'
const Balance = () => {
   const {transactions} = useContext(GlobalContext);
   const amounts = transactions.map(transaction => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div className='mt-3 '>
      <h4 className='font-bold'>Your Balance</h4>
      <h1 className='text-lg'>${total}</h1>
    </div>
  )
}

export default Balance
