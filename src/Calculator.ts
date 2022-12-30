test("a calculator", {
  "shows 0, right-justified, when first turned on"() {
    const calculator = Calculator()
    expect(renderForTests(calculator.display()), equals, "       0.")
  },

  "shows a digit that's pressed"() {
    const calculator = Calculator()
    calculator.press1()
    expect(renderForTests(calculator.display()), equals, "       1.")
  },
})

interface Calculator {
  press1(): void
  display(): CalculatorDisplay
}

type CalculatorDisplay = {
  digits: [Digit, Digit, Digit, Digit, Digit, Digit, Digit, Digit]
}

type Digit = " " | "0." | "1."

function Calculator(): Calculator {
  let digit: Digit = "0."

  return {
    press1,
    display,
  }

  function press1() {
    digit = "1."
  }

  function display(): CalculatorDisplay {
    return {digits: [" ", " ", " ", " ", " ", " ", " ", digit]}
  }
}

function renderForTests(c: CalculatorDisplay): string {
  return c.digits.join("")
}
