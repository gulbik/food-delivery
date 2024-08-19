import { BsBank, BsCash, BsCreditCard } from "react-icons/bs"
import BackButton from "../../components/BackButton"
import YellowButton from "../../components/YellowButton"
import CheckInput from "../../components/CheckInput"
import React, { useState } from "react"
import "./Checkout.css";
import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"

const Checkout: React.FC = () => {
    const totalPrice = useSelector((state: RootState) => state.cart.totalPrice)
    const paymentMethods = [
        { icon: <BsCreditCard />, label: 'Card', color: '#eb4796'},
        { icon: <BsBank />, label: 'Mobile Pay', color: '#f47b0b' },
        { icon: <BsCash />, label: 'Cash on Delivery', color: '#FDC83B' }
    ]
    const deliveryMethods = ["Door delivery", "Pick up"];

    const [selectedPayment, setSelectedPayment] = useState(paymentMethods[0].label);
    const [selectedDelivery, setSelectedDelivery] = useState(deliveryMethods[0]);

    return (
        <div className="action-page">
            <BackButton pageName="Checkout" />

            <div className="container px-5 h-100">
                <h1 className="mt-4 font-weight-bold">Payment</h1>

                <h5 className="mt-5">Payment method</h5>
                {paymentMethods.map((payment, i) => (
                    <React.Fragment key={i}>
                        <CheckInput
                            label={payment.label}
                            icon={payment.icon}
                            iconColor={payment.color as '#eb4796' | '#f47b0b' | '#FDC83B'}
                            checked={selectedPayment === payment.label}
                            onChange={() => setSelectedPayment(payment.label)}
                            name="paymentMethod"
                        />
                        {i < paymentMethods.length - 1 && <hr />}
                    </React.Fragment>
                ))}

                <h5 className="mt-5">Delivery method</h5>
                <section className="card p-3">
                    {deliveryMethods.map((method, i) => (
                        <CheckInput
                            label={method}
                            key={i}
                            checked={selectedDelivery === method}
                            onChange={() => setSelectedDelivery(method)}
                            name="deliveryMethod"
                        />
                    ))}
                </section>

                <div className="d-flex justify-content-between mt-5">
                    <h6>Total</h6>
                    <h5>Rs {totalPrice.toLocaleString()}</h5>
                </div>
            </div>
            <YellowButton label="Proceed to payment" />
        </div>
    );
};

export default Checkout;