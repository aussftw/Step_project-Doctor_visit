// const _formElement = {
//   dentist:{
//     elementName:"input",
//     val:[{
//       type:"text",
//       placeholder:'Цель визита',
//       name:"title",
//     }]

//   }
// }








const _formElements = {
  cardiologist: {
    elementName: "input",
    val: [{
        type: "text",
        placeholder: "Цель визита",
        name: "title"
      },
      {
        type: "text",
        placeholder: "Обычное давление",
        name: 'description'
      },
      {
        type: "text",
        placeholder: "Индекс массы тела"
        // reqired: true
      },
      {
        type: "text",
        placeholder: "Перенесенные заболевания сердечно-сосудистой системы"
        // reqired: true
      },
      {
        type: "text",
        placeholder: "Возраст"
        // reqired: true
      },
      {
        type: "text",
        placeholder: "ФИО"
        // reqired: true
      }
      // { type: "checkbox" }
    ]
  },

  teraphist: {
    elementName: "input",
    val: [{
        type: "text",
        placeholder: "Цель визита",
        name: "title",
        // reqired: true
      },
      {
        type: "text",
        placeholder: "Возраст",

        // reqired: true
      },
      {
        type: "text",
        placeholder: "ФИО",

        // reqired: true
      }
    ]
  },

  dentist: {
    doctor: "dentist",
    title: "TEST",
    elementName: "input",
    val: [{
        type: "text",
        placeholder: "Цель визита",
        name: 'title'
      },
      {
        type: "text",
        placeholder: "Дата последнего посещения",
        name:"last visit"
      },
      {
        type: "text",
        placeholder: "ФИО",
        name:"full name"
      }
    ]
  }
}

export {
  _formElements
}