import React, {Component,PropTypes} from 'react';
import {render} from 'react-dom';
import bankStore from './bankStore';
import constants from './constants';
import bankActionCreators from './bankActionCreators';
import { connect, Provider } from 'react-redux'


class BankApp extends Component{
    handleWithdraw(){
        console.log(this.refs.amount.value);
        this.props.onWithdraw(this.refs.amount.value);
        this.refs.amount.value = '';
    }
    handleDeposit(){
        this.props.onDeposit(this.refs.amount.value);
        this.refs.amount.value = '';
    }

    render(){
        return (
            <div>
                <header>
                    <img src="//www.pro-react.com/logos/redux-bank.svg" width="150"/> Redux Bank
                </header>

                <h1>Your balance is ${(this.props.balance).toFixed(2)}</h1>
                <div className="atm">
                    <input type="text" placeholder="Enter Ammount" ref="amount"/>
                    <button onClick={this.handleWithdraw.bind(this)}>WithDraw</button>
                    <button onClick={this.handleDeposit.bind(this)}>Deposit</button>
                </div>

                <div className="exchange" onClick={this.props.onToggle}>
                    <strong>Additional Info</strong>
                    <div className={this.props.showExchange? 'info--visible' : 'info--closed'}>
                        <p><strong>Your account Manager: </strong> C.F.Frost</p>
                        <p><strong>Pre approved credit limit:</strong> $500,000.00</p>
                    </div>
                </div>
            </div>
        )

    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        balance: state.balance,
        showExchange: state.ui.showExchange,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onDeposit: (amount) => dispatch(bankActionCreators.depositIntoAccount(amount)),
        onWithdraw: (amount) => dispatch(bankActionCreators.withdrawFromAccount(amount)),
        onToggle: () => dispatch(bankActionCreators.toggleExchange()),
    }
}
const BankAppContainer = connect(mapStateToProps, mapDispatchToProps)(BankApp);


render(
    <Provider store={bankStore}>
        <BankAppContainer />
    </Provider>,
    document.getElementById('root')
);
