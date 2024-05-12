import { render } from './components'
import { UsersList } from './components/common/UsersList'

const initialFetch = async () => {
  render(UsersList())
}

initialFetch()
