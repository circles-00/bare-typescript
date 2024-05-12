export type TGender = 'male' | 'female'
export type TUserNameTitle = 'Mr' | 'Ms' | 'Mrs'
export type TUserName = {
  title: TUserNameTitle
  first: string
  last: string
}
export type TPicture = {
  large: string
  medium: string
  thumbnail: string
}

export interface IUserResult {
  gender: TGender
  name: TUserName
  picture: TPicture
}

export interface IUser {
  results: IUserResult[]
}
