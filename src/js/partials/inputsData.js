const _formElements = {
  cardiologist: {
    elementName: "input",
    val: [
      {
        type: "text",
        placeholder: "Цель визита",
        name: "title",
        value: ""
      },
      {
        type: "text",
        placeholder: "Обычное давление",
        name: "presure",
        value: ""
      },
      {
        type: "number",
        placeholder: "Индекс массы тела",
        name: "body mass index",
        value: ""
      },
      {
        type: "text",
        placeholder: "Перенесенные заболевания сердечно-сосудистой системы",
        name: "past diseases of the cardiovascular system",
        value: ""
      },
      {
        type: "text",
        placeholder: "Возраст",
        name: "age",
        value: ""
      },
      {
        type: "text",
        placeholder: "ФИО",
        name: "fullname",
        value: ""
      },
      {
        type: "text",
        name: "doctorType",
        style: "none",
        value: "cardiologist"
      }
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
      },
      {
        type: "text",
        placeholder: "Возраст",
        name: "age",
        value: ""
      },
      {
        type: "text",
        placeholder: "ФИО",
        name: "fullname",
        value: ""
      },
      {
        type: "text",
        name: "doctorType",
        style: "none",
        value: "teraphist"
      }
    ]
  },

  dentist: {
    elementName: "input",
    val: [
      {
        type: "text",
        placeholder: "Цель визита",
        name: "title",
        value: ""
      },
      {
        type: "date",
        placeholder: "Дата последнего посещения",
        name: "last visit",
        value: ""
      },
      {
        type: "text",
        placeholder: "ФИО",
        name: "fullname",
        value: ""
      },
      {
        type: "text",
        name: "doctorType",
        style: "none",
        value: "dentist"
      }
    ]
  }
}

export { _formElements }
