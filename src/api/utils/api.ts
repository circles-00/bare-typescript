import { IGetOptions } from './types'

export const get = async <T>(
  url: string,
  opts?: Partial<IGetOptions>,
): Promise<T | undefined> => {
  const { params } = opts || {}

  try {
    const data = await fetch(`${url}?${new URLSearchParams(params)}`, {
      method: 'GET',
      ...opts,
    })

    return data.json()
  } catch (error) {
    console.error(error)
  }
}
