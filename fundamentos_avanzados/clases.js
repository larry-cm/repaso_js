// clase de repaso numero 1

class HospitalEmployee {
  constructor (name) {
    this._name = name
    this._remainingVacationDays = 20
  }

  get name () {
    return this._name
  }

  get remainingVacationDays () {
    return this._remainingVacationDays
  }

  takeVacationDays (daysOff) {
    this._remainingVacationDays -= daysOff
    return `has eliminado ${daysOff} de las vacaciones`
  }

  static generatePassword () {
    return Math.floor(Math.random() * 10000)
  }
}

// subclase de repaso numero 2
class Nurse extends HospitalEmployee {
  constructor (name, certifications) {
    super(name)
    this._certifications = certifications
  }

  get certifications () {
    return this._certifications
  }

  addCertification (newCertification) {
    this.certifications.push(newCertification)
  }
}

module.exports = { HospitalEmployee, Nurse }
