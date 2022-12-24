import { useControls } from "leva"
import { StoreType } from "leva/dist/declarations/src/types"
import { usePanel, tree, useEditorStore } from "../../editable"

export function SceneControls({
  store = "scene",
  order
}: {
  store?: StoreType | string
  order?: number
}) {
  const panel = usePanel(store)
  const [p] = useEditorStore((state) => [state.elements.root])
  const items: Record<string, any> = {}
  p.children.forEach((v) => {
    items[v.id] = v
  })

  useControls(
    {
      scene: tree({
        items,
        scrollable: false,
        order: order
      })
    },
    { store: panel.store },
    [items, order]
  )

  return null
}
