import { IUserResult } from '../../api'
import { html } from '../utils/html'

export const UserComponent = (user?: IUserResult): string | undefined => {
  if (!user) {
    return
  }

  return html`<div class="flex gap-4 items-center">
    <img src="${user.picture.large}"/>
    <p>${user.name.title} ${user.name.first} ${user.name.last}</p>
    <p>${user.gender}</p>
  </div>`
}

