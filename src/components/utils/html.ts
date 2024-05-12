const serializeHtml = <T>(strings: TemplateStringsArray, ...values: T[]): string => {
  let result = strings[0]
  for (let i = 0; i < values.length; i++) {
    result += values[i] + (strings[i + 1] || '')
  }

  // For some reason when having nested html`` calls, there was a random comma between nodes
  return result.replace(new RegExp(">,<", 'g'), '><')
}

export const html = <T>(template: TemplateStringsArray, ...values: T[]): string => serializeHtml(template, ...values)
