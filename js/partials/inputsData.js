const _formElements = {
  cardiologist: {
    typo: "input",
    val: [
      {
        type: "text",
        placeholder: "Цель визита"
        // reqired: true
      },
      {
        type: "text",
        placeholder: "Обычное давление"
        // reqired: true
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
    typo: "input",
    val: [
      {
        type: "text",
        placeholder: "Цель визита"
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
    ]
  },

  dentist: {
    typo: "input",
    val: [
      {
        type: "text",
        placeholder: "Цель визита"
        // reqired: true
      },
      {
        type: "text",
        placeholder: "Дата последнего посещения"
        // reqired: true
      },
      {
        type: "text",
        placeholder: "ФИО"
        // reqired: true
      }
    ]
  }
}

export { _formElements }
