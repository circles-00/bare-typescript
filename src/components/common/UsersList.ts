import { fetchUsers } from "../../api"
import { html } from "../utils/html"
import { UserComponent } from "./UserComponent"

export const UsersList = async () => {
  const users = await fetchUsers()

  return html`<div><h1 class="font-bold">Results:</h1><div class="flex flex-col gap-4">${(users?.results.map((user) => UserComponent(user)) ?? [])}</div></div>`
}
