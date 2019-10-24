const _personal = {
  cardiologist: {
    elementName: "option",
    val: [
      "Выберите доктора",
      "Петрович Перович",
      "Сергей Петрович",
      "Пётр Петрович"
    ]
  },
  therapist: {
    elementName: "option",
    val: ["Петрович Перович", "Сергей Петрович", "Пётр Петрович"]
  },
  dentist: {
    elementName: "option",
    val: ["Петрович Перович", "Сергей Петрович", "Пётр Петрович"]
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
