import { fetchUsers } from "./api"
import { UserComponent } from "./components"

const initialFetch = async () => {
  const users = await fetchUsers()

  if(users) {
    for (const user of users.results) {
      const userComponent = new UserComponent(user)

      document.body.appendChild(userComponent)
    }
  }

}

initialFetch()

