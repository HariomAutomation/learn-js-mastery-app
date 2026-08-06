/// <reference types="vite/client" />

declare module "*.mdx" {
  const content: string
  export default content
}

declare module "*?raw" {
  const content: string
  export default content
}
