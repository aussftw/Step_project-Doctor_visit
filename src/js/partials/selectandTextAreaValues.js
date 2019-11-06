const _personal = {
  cardiologist: {
    elementName: "option",
    textValue: ["Дана Скалли", "Стивен Стрендж", "Джек Шепард"]
  },
  therapist: {
    elementName: "option",
    textValue: ["Грегори Хаус", "Кристиан Трой", "Василий Петрович"]
  },
  dentist: {
    elementName: "option",
    textValue: ["Перри Кокс", "Билл Харфорд", "Хеннибал Лектер"]
  }
}

const _priority = {
  elementName: "option",
  val: ["important", "medium", "low"]
}

const _description = {
  elementName: "textarea",
  val: [
    {
      placeholder: "Описание визита"
    }
  ]
}

export { _personal }
export { _description }
export { _priority }
