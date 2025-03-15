const { HospitalEmployee } = require('./clases.js')

const i = new HospitalEmployee('juan')
console.log(i.takeVacationDays(23))
console.log(i.remainingVacationDays)
