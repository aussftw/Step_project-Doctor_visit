class Visit {
  constructor(fullName, visitPurpose) {
    this.fullName = fullName;
    this.visitPurpose = visitPurpose;
  }
  createWrapper() {
    
    const container = document.createElement('div');
    card.className = "card";
    card.innerHTML = `
<h4>${this.name}</h4>
<P>${this._descriptions}</P>
<P>${this._price}</P>`;
    const close = document.createElement('div');
    close.className = "close";
    close.innerText = 'X';
    card.append(close);
    container.append(card);

  }
}


class therapist extends Visit {
  constructor(fullName, visitPurpose, pressure, BMI, diseases) {
    super(fullName, visitPurpose)
    this.pressure = pressure;
    this.BMI = BMI;
    this.diseases = diseases;

  }


}
const pacient = new therapist("Pupkin Ivan Ivanich", "Pain", "420:190", 65, ["bronhit", "Aritmiyah", "infarct"])

console.log(pacient);
console.log(JSON.stringify(pacient));