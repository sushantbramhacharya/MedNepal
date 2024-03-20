import React, { useEffect ,useState} from "react";
import { FaTrashAlt } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import {  useLogoutMutation, useShippingInfoUpdateMutation } from "../api/userApi";
import { logoutUser,setCarts, setShipping } from "../slices/userSlice";
import { useDeleteFromCartMutation, useGetCartItemsQuery, useOrderItemsMutation } from "../api/cartApi";

const ProfileScreen = () => {
  
  const [cartPrice, setCartPrice] = useState(0);
  const [cartShippingPrice, setCartShippingPrice] = useState(0);
  const [cartTotalPrice, setCartTotalPrice] = useState(0);


  //Shipping Details
  const [street, setStreet] = useState("");
  const [municipality, setMunicipality] = useState("");
  const [wardNo, setWardNo] = useState("");
  const [district, setDistrict] = useState("");
  const [phone, setPhone] = useState("");


  const dispatch = useDispatch();
  const navigator=useNavigate();

  const {data:fetchedCartData,refetch}=useGetCartItemsQuery();
  const {user} = useSelector((state)=>state.userSlice);
  
  useEffect(()=>{
    refetch();
    dispatch(setCarts(fetchedCartData));
  },[fetchedCartData])
  
  useEffect(()=>{
    const tempCartPrice=user?.cart?.reduce((acc,item)=>acc+item.totalPrice,0)
    setCartPrice(tempCartPrice);
    if(tempCartPrice<800){
      setCartShippingPrice(100);
      setCartTotalPrice(tempCartPrice+100);
    }else{
      setCartShippingPrice(0);
      setCartTotalPrice(tempCartPrice+0);
    }
    setStreet(user?.shippingAddress?.street||"")
    setDistrict(user?.shippingAddress?.district||"")
    setWardNo(user?.shippingAddress?.wardNo||"")
    setMunicipality(user?.shippingAddress?.municipality||"")
    setPhone(user?.shippingAddress?.phone||"")
  },[user])
  
 
  const [deleteFromCart,{isLoadingDeleteFromCart}]=useDeleteFromCartMutation();
  const handleDeleteCartItem = async(id) => {
    //in async/await block use try catch
    try{
      const res=await deleteFromCart({cartId:id}).unwrap();
      alert(res.name+" Deleted successfully");
      refetch();
    }catch(error)
    {
      alert(error?.data?.message);
    }
  };

  const [logout,{isLoading}]=useLogoutMutation();

  const logoutUserHandler=async()=>{
    const resp=await logout().unwrap();
    dispatch(logoutUser());
    navigator('/login')
  }

  const [orderItems,{isLoadingOrderItems}]=useOrderItemsMutation();

  const orderItemsHandler=async()=>{
    try{
      const payment=await orderItems({
        cartId:fetchedCartData,
        cartPrice,
        cartShippingPrice,
        cartTotalPrice
      });
      console.log(payment);
      window.open(payment.data.payment_url, '_blank');
    }catch(err){
      alert(err?.data?.message);
    }
  }

  //Update shipping details
  const [shippingInfoUpdate,{isLoadingShippingUpdate}]=useShippingInfoUpdateMutation();
  const updateShippingDetails=async(e)=>{
    e.preventDefault();
    try{
      const shippingAddress=await shippingInfoUpdate({
        street,
        municipality,
        wardNo,
        phone,
        district
      }).unwrap();
      dispatch(setShipping(shippingAddress));
    }
    catch(error)
    {
      alert(error?.data?.message);
    }
  }
  return (
    <div className="profile-screen bg-gray-100 min-h-screen py-12">
      <h1 className="text-3xl text-center mb-6">User Profile</h1>
      <div
        className="user-profile bg-white rounded-lg shadow-lg p-6 mx-auto max-w-4xl"
      >
        {" "}
        {/* Adjusted max-w-4xl */}
        <h2 className="text-xl font-semibold mb-4">Name: {user.name.toUpperCase()}</h2>
        <p className="text-gray-600">Email: {user.email}</p>

        <div className="cart mt-4">
          <h3 className="text-lg font-semibold mb-2">Cart</h3>
          <p className="text-right italic text-slate-500">* Editing can be done by adding product again</p>
          <div className="grid grid-cols-2 gap-4 bg-slate-300 p-3">
            {user?.cart?.map((item, index) => (
              
              <div
                key={index}
                className="flex items-center bg-white rounded-lg shadow-lg p-4"
              >
                <Link className="inline-block" to={"/med/"+item.medId}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                </Link>
                <Link className="inline-block" to={"/med/"+item.medId}>
                <div className="ml-4">
                  
                  <p className="text-gray-800">{item.name}</p>
                  <p className="text-gray-600">
                    {item.qty}x Rs {item.pricePerMed} : Rs {item.totalPrice}
                  </p>
                </div>
                </Link>
                <button
                  onClick={() => handleDeleteCartItem(item._id)}
                  className="ml-auto focus:outline-none"
                >
                  <FaTrashAlt className="text-red-500 cursor-pointer" />
                </button>
              </div>
            ))}
            <div className="col-span-2 bg-slate-400 p-2 rounded-lg flex justify-end gap-5 items-center">
              <p className="text-white">Price: Rs.{cartPrice}</p>
              <p className="text-white">Shipping Price: Rs.{cartShippingPrice}</p>
              <p className="text-white">Total Price: Rs.{cartTotalPrice}</p>
            <button onClick={orderItemsHandler} className="text-white justify-self-end bg-green-500 inline-block w-1/4  mr-4 rounded-md p-2 ">Order Items</button>
            </div>
          </div>
            <p className="text-right italic text-slate-500">Payment Powered By <a href="https://khalti.com" target="_blank" className="font-bold text-purple-600">Khalti</a> </p>
        </div>

        <form className="shipping-address mt-4 bg-white rounded-lg shadow-lg p-4">
    <h3 className="text-lg font-semibold mb-2">Shipping Address</h3>
    <div className="text-gray-600">
        <div>
            <label htmlFor="street" className="font-semibold">Street:</label>
            <input onChange={(e)=>setStreet(e.target.value)}  type="text" id="street" name="street" value={street} />
        </div>
        <div>
            <label htmlFor="municipality"  className="font-semibold">Municipality:</label>
            <input onChange={(e)=>setMunicipality(e.target.value)} type="text" id="municipality" name="municipality" value={municipality} />
        </div>
        <div>
            <label htmlFor="wardNo" className="font-semibold">Ward No:</label>
            <input type="text" onChange={(e)=>setWardNo(e.target.value)} id="wardNo" name="wardNo" value={wardNo}  />
        </div>
        <div>
            <label htmlFor="district" className="font-semibold">District:</label>
            <input type="text" id="district" onChange={(e)=>setDistrict(e.target.value)} name="district" value={district}  />
        </div>
        <div>
            <label htmlFor="phone" className="font-semibold">Phone:</label>
            <input type="number" id="phone" onChange={(e)=>setPhone(e.target.value)} name="phone" value={phone}  />
        </div>
        <button onClick={updateShippingDetails} className="bg-red-400 text-white px-3 text-right my-2 py-1 rounded-lg">Update</button>
    </div>

</form>

        {/* <div className="orders mt-4">
          <h3 className="text-lg font-semibold mb-2">Orders</h3>
          {user?.orders?.map((order) => (
            <div
              key={order.orderId}
              className="order mb-4 bg-white rounded-lg shadow-lg p-4"
            >
              <p className="text-gray-600">Order ID: {order.orderId}</p>
              <p className="text-gray-600">
                Payment Information: {order.paymentInformation}
              </p>
              <div className="grid grid-cols-2 gap-4 mt-2">
                {order.order.map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center ${
                      item.delivered ? "bg-green-200" : "bg-red-200"
                    } rounded-lg p-2`}
                  >
                    <img
                      src={`images/${item.name.toLowerCase()}.jpg`}
                      alt={item.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="ml-2">
                      <p className="text-gray-800">{item.name}</p>
                      <p className="text-gray-600">
                        {item.qty}x ${item.price}
                      </p>
                      {item.delivered ? (
                        <p className="text-green-700 font-semibold">
                          Delivered
                        </p>
                      ) : (
                        <p className="text-red-700 font-semibold">
                          Not Delivered
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div> */}
        <button onClick={logoutUserHandler} className="bg-red-500 mt-3 mx-3 text-white rounded-lg px-2 py-1 shadow-md hover:bg-red-600">Logout</button>
      </div>
    </div>
  );
};

export default ProfileScreen;
