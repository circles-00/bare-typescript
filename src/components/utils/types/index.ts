export interface IComponent<T> {
  component: (props: T) => Node | undefined
  props: T
}
