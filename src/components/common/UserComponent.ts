import { IUserResult } from '../../api'
import { html } from '../utils/html'

export const UserComponent = (user?: IUserResult): Node | undefined => {
  if (!user) {
    return
  }

  return html`<div class="flex gap-4">
    <p>${user.name.title} ${user.name.first} ${user.name.last}</p>
    <p>${user.gender}</p>
  </div>`
}

