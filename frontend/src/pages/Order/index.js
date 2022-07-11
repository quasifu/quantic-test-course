import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import OrderContext from '../../context/OrderContext';
import { API_URL } from '../../utils/constants';
import style from './Order.module.scss';

export default function Order() {
  const { orderName, orderItems } = useContext(OrderContext);
  const [deliveryDistance, setDeliveryDistance] = useState(0);
  const [deliveryFee, setDeliveryFee] = useState(0);
  const renderItem = (orderItem, idx) => {
    return (
      <div className={style.itemWrapper} key={idx}>
        <span className={style.item}>{orderItem.item}</span>
        <span>{orderItem.quantity}</span>
      </div>
    );
  };

  const renderDelivery = () => {
    return (
      <div className={style.itemWrapper}>
        <span className={style.item}>What's your distance:</span>
        <select
          value={deliveryDistance}
          onChange={(event) => {
            setDeliveryDistance(event.target.value);
          }}
        >
          <option value='0'></option>
          <option value='1'>1 mile</option>
          <option value='3'>3 miles</option>
          <option value='5'>5 miles</option>
          <option value='10'>10 miles</option>
        </select>
      </div>
    );
  };

  const renderDeliveryFee = () => {
    return (
      <div className={style.itemWrapper}>
        <span className={style.item}>Delivery Fee</span>
        <span>{deliveryFee}</span>
      </div>
    );
  };

  useEffect(() => {
    axios
      .get(`${API_URL}/api/delivery/${orderName}/${deliveryDistance}`)
      .then((response) => {
        if (response.data.status === 'success') {
          setDeliveryFee(response.data.data);
        }
      });
  }, [deliveryDistance, orderName]);
  return (
    <div className={style.wrapper}>
      {orderItems.length > 0 && renderDelivery()}
      {orderItems.map((orderItem, idx) => renderItem(orderItem, idx))}
      {renderDeliveryFee()}
    </div>
  );
}
