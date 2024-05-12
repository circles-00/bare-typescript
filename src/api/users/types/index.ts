export type TGender = "male" | "female"
export type TUserNameTitle = "Mr" | "Ms" | "Mrs"
export type TUserName = {
  title: TUserNameTitle
  first: string
  last: string
}

export interface IUserResult {
  gender: TGender
  name: TUserName
}

export interface IUser {
  results: IUserResult[]
}

