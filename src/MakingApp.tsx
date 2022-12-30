import {render} from "preact"
import "./app.css"

render(<App />, document.getElementById("app")!)

export function App() {
  return (
    <div>
      <select>
        <option value=" ">blank</option>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(String).map((digit) => {
          return <option value={digit}>{digit}</option>
        })}
      </select>
    </div>
  )
}
