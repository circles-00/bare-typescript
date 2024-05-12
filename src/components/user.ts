import { IUserResult } from "../api"

export class UserComponent extends HTMLElement {
  constructor(user?: IUserResult) {
    super()

    const shadow = this.attachShadow({mode: 'open'})

    if(!user) {
      return
    }

    const container = document.createElement("div")
    container.style.display = "flex"
    container.style.flexDirection = "column"

    const name = document.createElement('p')

    name.textContent = `${user.name.title} ${user.name.first} ${user.name.last}`
    name.style.margin = '0px'

    const gender = document.createElement('p')
    gender.textContent = user.gender

    container.appendChild(name)
    container.appendChild(gender)
    shadow.appendChild(container)
  }
}

customElements.define("user-component", UserComponent)
