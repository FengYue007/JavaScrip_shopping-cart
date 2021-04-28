class Cart {
  constructor() {
    this.items = []
  }

  empty() {
    this.items = []
  }

  add(item) {
    const foundItem = this.items.find(t => t.id == item.id)

    if (foundItem) {
      // 增加數量
      foundItem.increment()
    } else {
      this.items.push(item)
    }
  }

  removeItemId(id) {
    this.items.filter((item) => item.id != id) // filter 篩選條件(過濾) 成立才會留下來 filter 會回傳一個新的陣列。
  }

  totalPrice() {
    return Math.round(this.items.reduce(
      (total, currentItem) => total + currentItem.totalPrice(),
      0
    )* 100) / 100

    // let total = 0

    // this.items.forEach(item => {
    //   total += item.totalPrice()
    // })

    // return total
  }
}

export default Cart


