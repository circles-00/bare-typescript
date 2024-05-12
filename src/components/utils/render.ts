import { renderComponent } from './renderComponent'
import { IComponent } from './types'

export const render = <T>(
  components: IComponent<T> | IComponent<T>[],
  parent?: Node,
) => {
  const parentNode = parent ?? document.body

  if (Array.isArray(components)) {
    components.forEach((component) => {
      renderComponent(component, parentNode)
    })

    return
  }

  const component = components
  renderComponent(component, parentNode)
}
