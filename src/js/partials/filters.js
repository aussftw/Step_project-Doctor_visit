// import  {renderBoard} from './board'

function getForm() {
  const filterForm = document.getElementById('filterForm')
  console.log(filterForm);

  const prioritySelect = document.getElementById('prioritySelect')
  const statusSelect = document.getElementById('statusSelect')
  const textArea = document.getElementById('textArea')
  

  filterForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const priority = prioritySelect.value
    const status = statusSelect.value
    const inputvalue = textArea.value
    
    console.log(priority);
    console.log(inputvalue);
    console.log(status);
    
  })
}

const authOptions = {
  method: "get",
  url: 'http://cards.danit.com.ua/cards',
  // data: JSON.stringify(obj),
  headers: {
    Authorization: "Bearer 569bc2174da3"
  }
}

export { getForm }