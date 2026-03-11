import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        if (!stripe || !elements) {
            return;
        }

        const cardElement = elements.getElement(CardElement);
        
        // Add your payment processing logic here
        // Example: const { paymentMethod, error } = await stripe.createPaymentMethod({ type: 'card', card: cardElement });
        
        // Handle errors or update success state
        if (error) {
            setError(error.message);
            setSuccess(false);
        } else {
            setError(null);
            setSuccess(true);
            // You can also save paymentMethod.id for later use.
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Payment Form</h2>
            <CardElement />
            {error && <div className="error">{error}</div>}
            {success && <div className="success">Payment successful!</div>}
            <button type="submit" disabled={!stripe}>Pay</button>
        </form>
    );
};

export default PaymentForm;