import React from 'react'
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state/index';
import { useSelector } from 'react-redux';

const Shop = () => {
    const amount = useSelector(state => state.amount)
    
    const dispatch = useDispatch();
    const actions = bindActionCreators(actionCreators, dispatch);
    
    return (
        <div>
            <h2>Change Balance</h2>
            <button className="btn btn-primary mx-2" onClick={()=> {actions.withdrawMoney(100)}}> - </button>
            Update Balance ({amount})
            <button className="btn btn-primary mx-2" onClick={()=> {actions.depositMoney(100)}}> + </button>

        </div>
    )
}

export default Shop
