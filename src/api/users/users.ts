import { IUser } from "./types"
import { API } from "./../utils"

export const fetchUsers = async () => {
  return API.get<IUser>('https://randomuser.me/api', {
    params: {
      results: '10'
    }
  })
}
