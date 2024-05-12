export const render = async<T>(
  template: string | Promise<string>,
  parent?: Node
) => {
  const awaitedTemplate = await template
  const parentNode = parent ?? document.body

  const parsed = new DOMParser().parseFromString(awaitedTemplate, 'text/html')

  parentNode.appendChild(parsed.body.children[0])
}
