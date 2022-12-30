import {h, Fragment} from "preact"
import "./app.css"
import {CalculatorLCD} from "./lib/LCD"

test("the test framework", {
  "runs a trivial test"() {
    expect(true, equals, true)
  },
})

export function App() {
  return (
    <>
      <CalculatorLCD
        e={false}
        m={false}
        minus={false}
        digits={[
          {
            top: false,
            upperLeft: false,
            upperRight: false,
            middle: false,
            lowerLeft: false,
            lowerRight: false,
            bottom: false,
            decimalPoint: false,
          },
          {
            top: false,
            upperLeft: false,
            upperRight: false,
            middle: false,
            lowerLeft: false,
            lowerRight: false,
            bottom: false,
            decimalPoint: false,
          },
          {
            top: false,
            upperLeft: false,
            upperRight: false,
            middle: false,
            lowerLeft: false,
            lowerRight: false,
            bottom: false,
            decimalPoint: false,
          },
          {
            top: false,
            upperLeft: false,
            upperRight: false,
            middle: false,
            lowerLeft: false,
            lowerRight: false,
            bottom: false,
            decimalPoint: false,
          },
          {
            top: false,
            upperLeft: false,
            upperRight: false,
            middle: false,
            lowerLeft: false,
            lowerRight: false,
            bottom: false,
            decimalPoint: false,
          },
          {
            top: false,
            upperLeft: false,
            upperRight: false,
            middle: false,
            lowerLeft: false,
            lowerRight: false,
            bottom: false,
            decimalPoint: false,
          },
          {
            top: false,
            upperLeft: false,
            upperRight: false,
            middle: false,
            lowerLeft: false,
            lowerRight: false,
            bottom: false,
            decimalPoint: false,
          },
          {
            top: false,
            upperLeft: false,
            upperRight: false,
            middle: false,
            lowerLeft: false,
            lowerRight: false,
            bottom: false,
            decimalPoint: false,
          },
        ]}
      />
      <Spacer height="9px" />
      <div class="ButtonGrid">
        <button style={gridPos("1", "1 / 3")}>ON/C</button>
        <button style={gridPos("5", "4 / 6")}>+</button>
        <button>MRC</button>
        <button>M-</button>
        <button>M+</button>
        <button>÷</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>×</button>
        <button>√</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>-</button>
        <button>%</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>+/-</button>
        <button>0</button>
        <button>.</button>
        <button>=</button>
      </div>
    </>
  )
}

function Spacer(props: {height: string}) {
  return <div style={props} />
}

function gridPos(column: string, row: string) {
  return {gridRow: row, gridColumn: column}
}
