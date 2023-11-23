import React, { useContext, useState } from "react";
import { GlobalContext } from "./Context/GlobalState";
const AddTransaction = () => {
    const {addTransaction} = useContext(GlobalContext);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
 
  const onSubmit = e =>{
    e.preventDefault();
    if(amount === 0){
        alert('$1 is minimum')
    }else{
        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        };
        addTransaction(newTransaction);
        setAmount(0);
        setText('');

    }
    
  }
  return (
    <div className="flex flex-col w-72 mt-3">
      <h3 className='font-bold'>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div>
          <label className="inline-block" htmlFor="text">Text</label>
          <input
          className="block m-1 border-[2px] border-blue-800 rounded-lg"
            type="text"
            value={text}
            placeholder="Enter text..."
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div>
          <label className="inline-block" htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
          className="block m-1 border-[2px] border-blue-800 rounded-lg"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="bg-green-300">Add transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;
