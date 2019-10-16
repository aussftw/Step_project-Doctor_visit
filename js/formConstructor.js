class Form {
      constructor(name, fullName, price,type, ...formEleemnts) {
        this.name = name;
        this.fullName = fullName;
        this._price = price;
        this._type = type;
        this._formElements = [...formEleemnts];
      }
    }
    createForm(){
    const form = document.createElement("form");
    for(let i = 0; i < this._formElements; i++) {
      // const element = new Input(this._formElements[i]);
      const element = document.createElement(this._formElements[i].name);
element.type = this._formElements[i].type;
form.append(element.render())
    }
    form.addEventListener("submit", function(){
      const arr = 
    })
    // _________________________
    return form ;
// create form + for in + let key of this(this конкретный доктор(перебирать его ключи))
    }
    class kardiolog extends formCreator {
      constructor(brand, size, weight) {
        super(...args)
        this.brand = brand;
        this.size = Object.assign({}, size);
        this._weight = weight;
      }
   render() {
     const form = super.createForm();
     form.append()
   }
    }