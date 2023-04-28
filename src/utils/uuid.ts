export function uuid(): string {
  return Math.random().toString(16).substring(3)
}
