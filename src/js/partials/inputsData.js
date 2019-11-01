const _formElements = {
  cardiologist: {
    elementName: "input",
    val: [
      {
        type: "text",
        placeholder: "Цель визита",
        name: "title",
        value: "",
        // reqired: true
      },
      {
        type: "number",
        placeholder: "Обычное давление",
        name: "presure",
        value: "",
        // reqired: true
      },
      {
        type: "number",
        placeholder: "Индекс массы тела",
        name: "body mass index",
        value: "",
        // reqired: true
      },
      {
        type: "text",
        placeholder: "Перенесенные заболевания сердечно-сосудистой системы",
        name: "past diseases of the cardiovascular system",
        value: "",
        // reqired: true
      },
      {
        type: "text",
        placeholder: "Возраст",
        name: "age",
        value: "",
        // reqired: true
      },
      {
        type: "text",
        placeholder: "ФИО",
        name: "fullname",
        value: "",
        // reqired: true
      },
      {
        type: "text",
        name: "doctorType",
        style: "none",
        value: "cardiologist"
        // reqired: true
      },
      // { type: "checkbox" }
    ]
  },

  teraphist: {
    elementName: "input",
    val: [
      {
        type: "text",
        placeholder: "Цель визита",
        name: "title",
        value: ""
        // reqired: true
      },
      {
        type: "text",
        placeholder: "Возраст",
        name: "age",
        value: ""

        // reqired: true
      },
      {
        type: "text",
        placeholder: "ФИО",
        name: "fullname",
        value: ""
        // reqired: true
      },
      {
        type: "text",
        name: "doctorType",
        style: "none",
        value: "teraphist"
        // reqired: true
      },
    ]
  },

  dentist: {
    elementName: "input",
    val: [
      {
        type: "text",
        placeholder: "Цель визита",
        name: "title",
        value: "",
        // reqired: true
      },
      {
        type: "date",
        placeholder: "Дата последнего посещения",
        name: "last visit",
        value: "",
        // reqired: true
      },
      {
        type: "text",
        placeholder: "ФИО",
        name: "full name",
        value: "",
        // reqired: true
      },
      {
        type: "text",
        name: "doctorType",
        style: "none",
        value: "dentist"
        // reqired: true
      },
    ]
  }
}

export { _formElements }
