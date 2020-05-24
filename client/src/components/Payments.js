import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';

import * as actions from '../actions';

class Payment extends Component {
    render() {
        return (
            <StripeCheckout
                name="Feedbackmail"
                description="Rs 10 for 50 email credits."
                amount={1000}
                currency="INR"
                token={token => this.props.handleToken(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
                <button className='btn blue'>Add Credits</button>
            </StripeCheckout>
        );
    }
}

export default connect(
    null,
    actions
)(Payment);