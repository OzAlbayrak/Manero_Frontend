import { createContext, useContext } from "react"




//const formEl = document.querySelector('.form');
//const formData = new FormData(formEl);
const OrderContext = createContext();
export const useOrderContext = (
    email,
    items,
    paymentMethod,
    comment,
    delivery,
    promoCodes
) => {
        /*
        const data = Object.fromEntries(
            email,
            items,
            paymentMethod,
            comment,
            delivery,
            promoCodes
            );    
            */
        fetch('https://sijb-cms22-backend.azurewebsites.net/api/Products/Orders',{
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(data)
        }).then(res => res.json())
        .then(data => console.log(data))
        .then(error => console.log(error));

    return useContext(OrderContext);
}
/*
export function addOrder(
        email,
        items,
        paymentMethod,
        comment,
        delivery,
        promoCodes
    ){

    const data = Object.fromEntries(
        email,
        items,
        paymentMethod,
        comment,
        delivery,
        promoCodes
        );    

    fetch('https://sijb-cms22-backend.azurewebsites.net/api/Products/Orders',{
    method: 'POST',
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify(data)
    }).then(res => res.json())
    .then(data => console.log(data))
    .then(error => console.log(error));

}
*/


export default OrderContext

/*

const formEl = document.querySelector('.form');

formEl.addEventListener('submit', event => {
    event.preventDefault();

    const formData = new FormData(formEl);
    const data = Object.fromEntries(formData);

    fetch('https://localhost:7235/api/Order',{
    method: 'POST',
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify(data)
    }).then(res => res.json())
    .then(data => console.log(data))
    .then(error => console.log(error));
});


*/