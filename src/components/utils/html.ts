const serializeHtml = <T>(strings: TemplateStringsArray, ...values: T[]): string => {
  let result = strings[0]
  for (let i = 0; i < values.length; i++) {
    result += values[i] + (strings[i + 1] || '')
  }
  return result
}

export const html = <T>(template: TemplateStringsArray, ...values: T[]): Node =>
  Object.assign(document.createElement('template'), { innerHTML: serializeHtml(template, ...values) }).content
