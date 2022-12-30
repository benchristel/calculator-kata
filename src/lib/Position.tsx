import {ComponentChildren, h} from "preact"

type Props = {
  x: number | string
  y: number | string
  children: ComponentChildren
}

export function Position(props: Props) {
  return (
    <div style={{position: "absolute", top: props.y, left: props.x}}>
      {props.children}
    </div>
  )
}
