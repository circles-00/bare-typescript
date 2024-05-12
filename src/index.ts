import { fetchUsers } from './api'
import { UserComponent, render } from './components'

const initialFetch = async () => {
  const users = await fetchUsers()

  const components =
    users?.results.map((user) => ({ component: UserComponent, props: user })) ??
    []

  render(components)
}

initialFetch()
