const buildItemList = (cart) => {
  const list = cart.items.map(item => {
    return `<tr>
      <td>${item.title}</td>
      <td><input type="number" min="1" class="quantity" value="${item.quantity}"></td>
      <td>$${item.price}</td>
      <td>$${item.totalPrice()}</td>
      <td><button data-id="${item.id}" class="remove-item-btn btn btn-danger btn-sm"><i class="fas fa-trash-alt"></i></button></td>
    </tr>`
  })

  return list.join('')
}

export { buildItemList }
