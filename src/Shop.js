import './Shop.css'
import React from 'react'
import { useDispatch } from 'react-redux';
import { CreditAmount, DabitAmount } from './store/action/action-type';

const Shop = () => {
    const dispatch = useDispatch()
  return (
    <div className='box'>
        <h1>Your Total Transaction</h1>
        <div className='inside'>  
        <button className='btn btn-primary' style={{margin:"10px"}} onClick={()=> dispatch(CreditAmount(200))}>Credit Amount</button>
        <button className='btn btn-primary' onClick={()=> dispatch(DabitAmount(100))} > Witdrawal Amount </button>
        </div>
    </div>
  )
}

export default Shop