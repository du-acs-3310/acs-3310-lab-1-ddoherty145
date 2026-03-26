export function clamp(value: number, min: number, max: number): number {
  if (value < min) {
    return min
  }
  if (value > max) {
    return max
  }
  return value
}

export function isBetween(value: number, min: number, max: number): boolean {
  return value >= min && value <= max
}

export function first<T>(array: T[]): T | undefined {
  return array[0]
}

export function pluckNames(items: { name: string }[]): string[] {
  return items.map(item => item.name)
}

export function repeat(text: string, count: number): string {
  return Array.from({ length: count }, () => text).join('')
}

export function add(a: number, b: number): number {
  return a + b
}

export function isEven(value: number): boolean {
  return value % 2 === 0
}

export function makeUser(name: string, age: number): { name: string; age: number } {
  return { name, age }
}

export function printLength(text: string): number {
  return text.length
}