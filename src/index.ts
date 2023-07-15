import { visit } from 'unist-util-visit'

interface Options {
  separator?: string
}

export default function remarkHeadingNumbering(options?: Options) {
  const counters: Record<string, number> = {}

  options = {
    separator: '.',
    ...options,
  }

  function incrementCounter(depth: number) {
    if (!counters[depth])
      counters[depth] = 1

    else
      counters[depth]++
  }

  function getNumber(depth: number) {
    const numberArr = []

    for (let i = 1; i <= depth; i++)
      counters[i] && numberArr.push(counters[i])

    return numberArr.join(options!.separator!)
  }

  function resetCounters(depth: number) {
    for (let i = depth + 1; i <= 6; i++)
      counters[i] = 0
  }

  return (tree: any) => {
    visit(tree, 'heading', (node: any) => {
      const depth = node.depth

      incrementCounter(depth)
      const number = getNumber(depth)

      node.children.unshift({
        type: 'text',
        value: `${number} `,
      })

      resetCounters(depth)
    })
  }
}
