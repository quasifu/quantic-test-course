import { createContext, useEffect } from 'react';
import { generateSlug } from 'random-word-slugs';
import { useState } from 'react';
import axios from 'axios';
const OrderContext = createContext();

const OrderContextProvider = function ({ children }) {
  const [orderName] = useState('acrid-faint-stone'); //generateSlug());
  const [orderItems, setOrderItems] = useState([]);
  const [orderInitialized, setOrderInitialized] = useState(false);
  const addItem = async (item, quantity) => {
    const response = await axios.post(
      'http://hangry-api-dev.us-east-1.elasticbeanstalk.com/api/order/',
      {
        name: orderName,
        item: item.id,
        quantity: quantity,
      }
    );
    if (response.data.status === 'success') {
      getOrderItems();
    }
  };

  const getOrderItems = async () => {
    const orderItemsResponse = await axios.get(
      `http://hangry-api-dev.us-east-1.elasticbeanstalk.com/api/order/${orderName}`
    );
    if (orderItemsResponse.data.status === 'success') {
      setOrderItems(orderItemsResponse.data.data);
      //console.log(orderItemsResponse.data.data);
    }
  };

  useEffect(() => {
    if (!orderInitialized) {
      setOrderInitialized(true);
      getOrderItems();
    }
  }, [orderInitialized]);
  return (
    <OrderContext.Provider
      value={{ orderName, addItem, orderItems, getOrderItems }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const OrderConsumer = OrderContext.Consumer;
export default OrderContext;
export { OrderContextProvider };
