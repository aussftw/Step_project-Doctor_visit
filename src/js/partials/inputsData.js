const _formElements = {
  cardiologist: {
    elementName: "input",
    val: [
      {
        type: "text",
        placeholder: "Цель визита",
        name: "title"
        // reqired: true
      },
      {
        type: "text",
        placeholder: "Обычное давление",
        name: "description"
        // reqired: true
      },
      {
        type: "text",
        placeholder: "Индекс массы тела",
        name: "body mass index"
        // reqired: true
      },
      {
        type: "text",
        placeholder: "Перенесенные заболевания сердечно-сосудистой системы",
        name: "past diseases of the cardiovascular system"
        // reqired: true
      },
      {
        type: "text",
        placeholder: "Возраст",
        name: "age"
        // reqired: true
      },
      {
        type: "text",
        placeholder: "ФИО",
        name: "fullname"
        // reqired: true
      }
      // { type: "checkbox" }
    ]
  },

  teraphist: {
    elementName: "input",
    val: [
      {
        type: "text",
        placeholder: "Цель визита",
        name: "title"
        // reqired: true
      },
      {
        type: "text",
        placeholder: "Возраст",
        name: "age"

        // reqired: true
      },
      {
        type: "text",
        placeholder: "ФИО",
        name: "fullname"
        // reqired: true
      }
    ]
  },

  dentist: {
    doctor: "dentist", // ??
    elementName: "input",
    val: [
      {
        type: "text",
        placeholder: "Цель визита",
        name: "title"
        // reqired: true
      },
      {
        type: "text",
        placeholder: "Дата последнего посещения",
        name: "last visit"
        // reqired: true
      },
      {
        type: "text",
        placeholder: "ФИО",
        name: "full name"
        // reqired: true
      }
    ]
  }
}

export { _formElements }
