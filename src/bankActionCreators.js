import constants from './constants';

const bankActionCreators = {
    depositIntoAccount(amount){
        return {
            type:constants.DEPOSIT_INTO_ACCOUNT,
            amount:amount
        }
    },
    withdrawFromAccount(amount){
        return {
            type: constants.WITHDRAW_FROM_ACCOUNT,
            amount: amount
        }
    },
    toggleExchange(){
        return {
            type: constants.TOGGLE_EXCHANGE
        };
    }
};

export default bankActionCreators;