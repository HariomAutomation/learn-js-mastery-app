export function executeCode(code: string): { result: unknown; error: string | null } {
  try {
    const result = new Function(code)()
    return { result, error: null }
  } catch (err) {
    return { result: null, error: String(err) }
  }
}
