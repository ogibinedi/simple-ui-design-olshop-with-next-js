import styles from '../styles/Cart.module.css';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import formatIDR from '../util/idr';
import { useEffect } from "react";
import {
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer
} from "@paypal/react-paypal-js";
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { reset } from '../redux/cartSlice';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [open, setOpen] = useState(false)
  const createOrder = async (data) => {
    try {
        const res = await axios.post("https://ogiui-designolshop.netlify.app/api/orders", data);
        if ( res.status === 201 ){
            dispatch(reset());
            router.push(`/orders/${res.data._id}`);
        }
    } catch (error) {
        console.log(error)
    }
  }
  const dispatch = useDispatch();
  const router = useRouter();

  // This values are the props in the UI
    let currency_per_one_dollar = 14700;
    let conversion = (cart.total / currency_per_one_dollar);
    let rounded = parseFloat(conversion).toFixed(2);
    const amount = rounded;
    const currency = "USD";
    const style = {"layout":"vertical"};

    // Custom component to wrap the PayPalButtons and handle currency changes
    const ButtonWrapper = ({ currency, showSpinner }) => {
        // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
        // This is the main reason to wrap the PayPalButtons in a new component
        const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

        useEffect(() => {
            dispatch({
                type: "resetOptions",
                value: {
                    ...options,
                    currency: currency,
                },
            });
        }, [currency, showSpinner]);


        return (<>
                { (showSpinner && isPending) && <div className="spinner" /> }
                <PayPalButtons
                    style={style}
                    disabled={false}
                    forceReRender={[amount, currency, style]}
                    fundingSource={undefined}
                    createOrder={(data, actions) => {
                        return actions.order
                            .create({
                                purchase_units: [
                                    {
                                        amount: {
                                            currency_code: currency,
                                            value: amount,
                                        },
                                    },
                                ],
                            })
                            .then((orderId) => {
                                // Your code here after create the order
                                return orderId;
                            });
                    }}
                    onApprove={function (data, actions) {
                        return actions.order.capture().then(function (details) {
                            const shipping = details.purchase_units[0].shipping;
                            createOrder({ 
                                    customer: shipping.name.full_name,
                                    address: shipping.address.address_line_1,
                                    total: cart.total,
                                    method: 1
                                 })
                        });
                    }}
                />
            </>
        );
    }
  return (
    <div className={styles.container}>
        <div className={styles.leftSide}>
            <div className={styles.responsiveTable}>
                <table className={styles.table}>
                    <thead className={styles.tr}>
                        <tr>
                            <th className={styles.th}>Product</th>
                            <th className={styles.th}>Name</th>
                            <th className={styles.th}>Extras</th>
                            <th className={styles.th}>Price</th>
                            <th className={styles.th}>Quantity</th>
                            <th className={styles.th}>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        { cart.products.map((product) => (
                            <tr key={product._id} className={styles.tr}>
                                <td className={styles.td}>
                                    <div className={styles.imgContainer}>
                                        <Image src={product.img} layout="fill" alt="product" objectFit="cover" />
                                    </div>
                                </td>
                                <td className={styles.td}>
                                    <span className={styles.name}>{product.title}</span>
                                </td>
                                <td className={styles.td}>
                                    {product.extras.map((extra) => (
                                        <span key={extra._id}>{extra.text}, </span>
                                    ))}
                                </td>
                                <td className={styles.td}>IDR {formatIDR(product.price)},-</td>
                                <td className={styles.td}>{product.quantity}</td>
                                <td className={styles.td}>
                                    <span className={styles.total}>IDR {formatIDR(product.price * product.quantity)},-</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        <div className={styles.rightSide}>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>CART TOTAL</h2>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Subtotal:</b> IDR {formatIDR(cart.total)},-
                </div>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Discount:</b> IDR 0,-
                </div>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Total:</b> IDR {formatIDR(cart.total)},-
                </div>
                {open ? (
                    <div className={styles.payment}>
                        <button className={styles.payButton}>Bayar di Tempat</button>
                        <PayPalScriptProvider
                            options={{
                                "client-id": "AXQcE_P3NE8tR9xZBK7jfCZyxN8S7adJYtxrxSzkq3d95tHZpyBzPA1xU73bJgEpLWtBEzyPT3cal_fJ",
                                components: "buttons",
                                currency: "USD",
                                "disable-funding": "credit,card,p24"
                            }}
                        >
                            <ButtonWrapper
                                currency={currency}
                                showSpinner={false}
                            />
                        </PayPalScriptProvider>
                    </div>
                ) : (
                    <button onClick={() => setOpen(true)} className={styles.button}>CHECKOUT NOW</button>
                )}
                
            </div>
        </div>
    </div>
  );
};

export default Cart;