import { cards } from "./cards"

renderBoard()

function renderBoard() {
  const board = document.querySelector(".board")
  board.innerHTML = `
      <div class="container">
        <h1> Hello John Doe</h1>
        <form action="">
            <div class="ui action input">
                <input type="text" placeholder="Search...">
                <select class="ui compact selection dropdown">
                    <option selected="" value="all">All</option>
                    <option value="articles">Open</option>
                    <option value="products">Done</option>
                </select>
                <select class="ui compact selection dropdown">
                    <option selected=""  value="all">All</option>
                    <option value="articles">High</option>
                    <option value="products">Normal</option>
                    <option value="products">Low</option>
                </select>
                <div type="submit" class="ui button">Search</div>
            </div>
        </form>

        <div class="cards-container ui segment">
            <p class="empty-container-text">No items have been added</p>
            <p class="empty-container-text">No items have been added</p>
            <p class="empty-container-text">No items have been added</p>
            <p class="empty-container-text">No items have been added</p>
            <p class="empty-container-text">No items have been added</p>
        </div>
    </div>
  `
}

export function renderBoard() {
  const board = document.querySelector(".board")
  board.innerHTML = `
      <div class="container">
        <h1> Hello John Doe</h1>
        <form action="">
            <div class="ui action input">
                <input type="text" placeholder="Search...">
                <select class="ui compact selection dropdown">
                    <option selected="" value="all">All</option>
                    <option value="articles">Open</option>
                    <option value="products">Done</option>
                </select>
                <select class="ui compact selection dropdown">
                    <option selected=""  value="all">All</option>
                    <option value="articles">High</option>
                    <option value="products">Normal</option>
                    <option value="products">Low</option>
                </select>
                <div type="submit" class="ui button">Search</div>
            </div>
        </form>
        <div class="cards-container ui segment">
        </div>
    </div>
  `
  const conatiner = document.querySelector(".cards-container")
  cards.forEach(item => {
    const card = document.createElement("div")
    console.log(item)
    card.innerHTML = `
      <div>
        <input value=${item.doctor}>
        <input value=${item.description}>
        <input value=${item.status}>
        <input value=${item.priority}>
        <input value=${item.content.bp}>
      </div>
  `
    conatiner.append(card)
  })
}
