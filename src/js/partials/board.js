


export function renderBoard() {
  const board = document.querySelector(".board")
  board.innerHTML = `
      <div class="container">
        <h1> Hello John Doe</h1>
        <form id='filterForm' action="">
            <div class="ui action input">
                <input id='textArea' type="text" placeholder="Search...">
                <select id='statusSelect' class="ui compact selection dropdown">
                    <option selected="" value="all">All</option>
                    <option value="articles">Open</option>
                    <option value="products">Done</option>
                </select>
                <select id='prioritySelect' class="ui compact selection dropdown">
                    <option selected=""  value="all">All</option>
                    <option value="articles">High</option>
                    <option value="products">Normal</option>
                    <option value="products">Low</option>
                </select>
                <button type="submit" class="ui button">Search</button>
            </div>
        </form>
        <div class="cards-container ui segment">
        </div>
    </div>
  `
}
