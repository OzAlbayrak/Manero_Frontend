import React from 'react'
import { useShoppingCartContext } from '../contexts/ShoppingCartContext'
import { useEffect, useState } from 'react'
import Header from '../components/sections/Header'
import MenuLinkIcons from '../components/individuals/MenuLinkIcons'
import { NavLink } from 'react-router-dom'
import SideIcon from '../components/individuals/SideIcon';
import OrderContext from '../contexts/OrderContext'


const CheckoutView = () => {

  const { items, addItem, removeItem } = useShoppingCartContext()
  const [totAmountOfItems, setTotAmountOfItems] = useState(0);
  const [totPrice, setTotPrice] = useState(0);
  const [start, setStart] = useState(true);
  const [comments, setComments] = useState('');
  //const [email, setEmail] = useState("order@myorder.com");
  const [deliveryMethod, setdeliveryMethod] = useState("PostNord");
  const [payment, setpayment] = useState("VISA CARD");
  const [promoCodes, setPromoCodes ] = useState([]);
  const [data, setData] = useState({
    Price: 45,
    Profile: {
      Email: "order@myorder.com",
      Name: "Namn",
      StreetName: "Gata",
      PostalCode: "12345",
      City: "Stockholm",
      PhoneNumber: "070111111"
    },
    Products: [],
    PaymentMethod: "VISA CARD",
    Comment: "hej",
    Delivery: "PostNord",
    PromoCodes: []
  });
  

  const handleChange = (event) => {
    setComments(event.target.value);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    // Hantera inskickade kommentaren, t.ex. skicka till en API eller spara i en lokal lista
    console.log('Skicka kommentar:', comments);
    setComments('');
  };

  const handleOnClick = (event) => {
    event.preventDefault();
    // Hantera inskickade kommentaren, t.ex. skicka till en API eller spara i en lokal lista
    /*
    setData({
      Price: totPrice,
      Profile: [{
        Email: email,
        Name: "Namn",
        StreetName: "Gata",
        PostalCode: "12345",
        City: "Stockholm",
        PhoneNumber: "070111111"
      }],
      Products: [{items}],
      PaymentMethod: payment,
      Comment: comments,
      Delivery: deliveryMethod,
      PromoCodes: [{}]
    });
    */

    //console.log('email:',email);
    console.log('items:',items);
    console.log('paymentMethod:',payment);
    console.log('comment:',comments);
    console.log('delivery:',deliveryMethod);
    console.log('promoCodes:',promoCodes);
    
    console.log('profile:',data.Profile);
    console.log('Products:',data.Products);
    console.log('Comment:',data.Comment);
    console.log('Delivery:',data.Delivery);
    console.log('PromoCode:',data.PromoCodes);

     /*
    const [data, setData] = useState({
      email,
      items,
      paymentMethod,
      comment,
      delivery,
      promoCodes
    });

   
    const data = Object.fromEntries(
      email,
      items,
      paymentMethod,
      comment,
      delivery,
      promoCodes
      );
      
      OrderContext(
        email,
        items,
        paymentMethod,
        comment,
        delivery,
        promoCodes
      );
     

*/
    
  fetch('https://sijb-cms22-backend.azurewebsites.net/api/Order',{
    
    method: 'POST',
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify(data)
    }).then(res => res.json())
    .then(data => console.log(data))
    .then(error => console.log(error));

      

  };


  /* const increaseTotItem = ((item) => {
     setTotAmountOfItems(totAmountOfItems + 1);
     setTotPrice(totPrice + item.price);
     addItem(item);
   })
 
   const decreaseTotItem = ((item) => {
     setTotAmountOfItems(totAmountOfItems - 1);
     setTotPrice(totPrice - item.price);
     removeItem(item);
   })*/

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
    console.log(items)

    if (start === true) {
      let pr = 0;
      let itm = 0;
      for (let i = 0; i < items.length; i++) {
        itm += items[i].quantity;
        pr += (items[i].price * items[i].quantity);
      }
      setTotAmountOfItems(itm)
      setTotPrice(pr)
      setStart(false)
    }
  }, [items])



  return (
    <div className='d-flex flex-column'>
      <div className='checkout-container'>
        <SideIcon />
        <Header
          title={'Checkout'}

          isMenu={true}
          hasCart={true}
        ></Header>
      </div>


      <div className='checkout-info'>
        <div className='checkout-info-order'>
          <p className='semi'>My order</p>
          <p className='totPrice'>
            <div>
              ${totPrice}
            </div>
          </p>
        </div>

        <div className='info-color'>
          <hr />
          <p className='totItem'>
            {
              items.map(item => (
                <div
                  key={item.id}>
                  <div className='check-inf'>
                    <div >
                      {item.name}
                    </div>
                    <div>
                      {item.quantity} x ${item.price}
                    </div>
                  </div>
                </div>
              ))
            }
          </p>

          <p className='discount'>Discount:
            <div>
              None
            </div>
          </p>
          {
            totPrice >= 100
              ?
              <p className='delivery'>Delivery
                <div>
                  Free
                </div>
              </p>
              :
              <p className='delivery'>Delivery
                <div>
                  $49
                </div>
              </p>
          }
          <hr />
        </div>
      </div>

      <div className='shipping-address'>
        <p className='semi'>Shipping details</p>
        <NavLink to='/Shipping details'>
          <i className='fa-regular fa-chevron-right'></i>
        </NavLink>
      </div>
      <p className='p-info'>Nordkapsvägen 1, 136 57, Vega SVERIGE</p>

      <hr />
      <div className='shipping-address'>
        <p className='semi'>Payment Method</p>
        <NavLink to='/Payment method'>
          <i className='fa-regular fa-chevron-right'></i>
        </NavLink>
      </div>
      <p className='p-info'>7741********6644</p>

      <hr />

      <form className='checkout-form' onSubmit={handleSubmit}>
        <label>COMMENT</label>
        <textarea className='area' rows="8" colum="10"
          value={comments}
          onChange={handleChange}
          placeholder="Enter your comment"
        />
      </form>

      <div className='mx-auto button-container'>
        <NavLink to='/'>
          <button className='btn rounded-pill my-3 custom-btn' onClick={
            handleOnClick}>
            Confirm Order
          </button>
        </NavLink>
      </div>

      <MenuLinkIcons className='menu-icons' />
    </div>
  )
}

export default CheckoutView