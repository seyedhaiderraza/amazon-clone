import React, { useContext, useEffect, useState } from 'react'
import Header from './Header'
import { db } from '../firebase'
import { collection, doc, onSnapshot, orderBy, query } from 'firebase/firestore'
import { StateContext } from '../state/StateProvider'
import Order from './Order'
import './Orders.css'
const Orders = () => {
  const [orders, setOrders] = useState([])
const {user, basket} = useContext(StateContext)

  useEffect(()=>{
    if(user){
      console.log('user uid is----------',user.uid);
              const userCollection= collection(db,'users')
              const userDoc = doc(userCollection, user?.uid)
              const ordersCollection = collection(userDoc,'orders')
              console.log('ordersCollection',ordersCollection);
              const ordersQuery = query(ordersCollection);
              console.log('ordersQuery', ordersQuery)
              const unsubscribe = onSnapshot(ordersQuery, (snapshot) => {
            // Handle snapshot changes here
            // The snapshot contains the ordered orders documents
                                            const ordersData = snapshot.docs.map((doc) => ({
                                              id: doc.id,
                                              data: doc.data()
                                            }));
                                            console.log('ordersData',ordersData)
                                            setOrders(ordersData);
                                                                    }
                                        );
                                        return ()=>unsubscribe()
      }
      else{
        setOrders([]);
      }
  },[user])
  return (
    <div className="orders">
      <Header />
      <h1>Your Orders History</h1>
      {orders.length > 0 ? (
        <div className="orders_order">
          {orders.map((order) => (
            <Order key={order.id} order={order} />
          ))}
        </div>
      ) : (
        <p>No orders found.</p>
      )}
    </div>
  );
};

export default Orders
