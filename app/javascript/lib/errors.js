export default class Errors {
  constructor() {
    this.errors = {}
  }

  get(field) {
    if (this.errors[field]) {
      return this.errors[field][0]
    }
  }

  has(field) {
    // eslint-disable-next-line no-prototype-builtins
    return this.errors.hasOwnProperty(field)
  }

  any() {
    return Object.keys(this.errors).length > 0
  }

  record(errors) {
    this.errors = errors
  }
}
