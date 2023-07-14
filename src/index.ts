import { visit } from 'unist-util-visit'

export default function remarkHeadingNumbering() {
  const counters: Record<string, number> = {}

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

    return numberArr.join('.')
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
