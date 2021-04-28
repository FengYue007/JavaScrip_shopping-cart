import 'bootstrap/dist/css/bootstrap.css'
import '@fortawesome/fontawesome-free/css/all.css'
// 實作寫在這裡！

import Cart from './cart'
import CartItem from './cart-item'
import { buildItemList } from './ui'

const cart = new Cart()

const renderUI = () => {
  const result = buildItemList(cart)
  document.querySelector('.cart tbody').innerHTML = result

  document.querySelectorAll('.remove-item-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      cart.removeItemId(e.currentTarget.dataset['id'])
      renderUI()
    })
  })

  document.querySelector('.cart .total-price').textContent = '$' + cart.totalPrice()
}

const addToCart = btn => {
  btn.addEventListener('click', (e) => {
    const card = e.currentTarget.parentElement.parentElement
    const title = card.querySelector('.card-title').textContent
    const price = parseFloat(card.querySelector('.price')
                                 .textContent
                                 .replace('$', ''))
    const id = card.dataset['productId']
    // 加到購物車
    const item = new CartItem({ id, title, price })
    cart.add(item)

    renderUI()
  })
}

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.card .btn')
  buttons.forEach(addToCart)

  document.querySelector('.empty-cart').addEventListener('click', () => {
    cart.empty()
    renderUI()
  })

  renderUI()
})






// import 'bootstrap/dist/css/bootstrap.css'
// import '@fortawesome/fontawesome-free/css/all.css'
// import ''
// // 實作寫在這裡！

// import Cart from './cart'
// // import Cart, { A } from './cart'
// import CartItem from './cart-item'

// const cart = new Cart()
// // console.log(A);

// // const cartItems = [
//   // {title: '...', quantity: 1, price: 10},
//   // {title: '...', quantity: 2, price: 20}
// // ]

// const addToCard = btn => {
//   btn.addEventListener('click', (e) => {
//     const card = e.currentTarget.parentElement.parentElement
//     const title = card.querySelector('.card-title').textContent
//     const price = parseFloat(card.querySelector('.price')
//                                  .textContent
//                                  .replace('$',''))
//     // console.log(title)
//     // console.log(price)
//     const id = card.dataset['productId']
//     // 加到購物車
//     const item = new CartItem({ id, title, price })
//     // console.log(item)
//     cart.add(item)
//     // const item = new CartItem({ 
//     //   title: title,
//     //   price: price
//     // })
//     // console.log(item)

//     const result = buildItemList(cart);
//     document.querySelector('.cart tobdy').innerHTML = result
//   })
// }

// document.addEventListener("DOMContentLoaded", ()=> {
//   const buttons = document.querySelectorAll('.card .btn')
//   // buttons.forEach(btn => addToCard(btn) )
//   buttons.forEach(addToCard)
// })


