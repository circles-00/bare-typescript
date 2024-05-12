import { IComponent } from './types'

export const renderComponent = <T>(
  { component, props }: IComponent<T>,
  parent?: Node,
) => {
  const node = component(props)
  const parentNode = parent ?? document.body

  if (!!node) {
    parentNode.appendChild(node)
  }
}
