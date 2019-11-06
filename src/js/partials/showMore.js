export function showMore(cards) {
  cards.forEach(card => {
    card.addEventListener("click", e => {
      let button = e.target
      if (button.classList.contains("show-more")) {
        let currentCard = e.currentTarget
        currentCard.classList.toggle("show")
      }
    })
  })
}
