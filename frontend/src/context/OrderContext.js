import { createContext } from 'react';
import { generateSlug } from 'random-word-slugs';
import { useState } from 'react';
import axios from 'axios';
const OrderContext = createContext();

const OrderContextProvider = function ({ children }) {
  const [orderName] = useState(generateSlug());
  const addItem = (item, quantity) => {
    axios
      .post('http://hangry-api-dev.us-east-1.elasticbeanstalk.com/api/order/', {
        name: orderName,
        item: item.id,
        quantity: quantity,
      })
      .then((response) => {
        console.log(response.data);
      });
    console.log(orderName);
    console.log(item, quantity);
  };
  return (
    <OrderContext.Provider value={{ orderName, addItem }}>
      {children}
    </OrderContext.Provider>
  );
};

export const OrderConsumer = OrderContext.Consumer;
export default OrderContext;
export { OrderContextProvider };
