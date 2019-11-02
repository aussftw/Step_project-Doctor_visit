


export function showMore() {
    const cards = document.querySelectorAll('.card')
    console.log('---');
    console.log(cards);
    cards.forEach(card => {
        card.addEventListener('click', (e) => {
            let button = e.target
            let currentCard = e.currentTarget
            if (button.classList.contains('show-more')) {
                currentCard.classList.toggle('show')
            }
        console.log(e.target);
        console.log(e.currentTarget);
        })
    })
}


