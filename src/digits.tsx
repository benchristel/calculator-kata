import {h} from "preact"
import {unreachable} from "./lib/unreachable"
import {SevenSegment, SevenSegmentViewModel} from "./LCD"

export type LCDDigit =
  | " "
  | "1"
  | "1."
  | "2"
  | "2."
  | "3"
  | "3."
  | "4"
  | "4."
  | "5"
  | "5."
  | "6"
  | "6."
  | "7"
  | "7."
  | "8"
  | "8."
  | "9"
  | "9."
  | "0"
  | "0."

type DigitProps = {
  digit: LCDDigit
}

export function DigitView(props: DigitProps) {
  return <SevenSegment {...segmentsForDigit(props.digit)} />
}

export function segmentsForDigit(d: LCDDigit): SevenSegmentViewModel {
  switch (d) {
    case " ":
      return blank
    case "1":
      return one
    case "1.":
      return dot(one)
    case "2":
      return two
    case "2.":
      return dot(two)
    case "3":
      return three
    case "3.":
      return dot(three)
    case "4":
      return four
    case "4.":
      return dot(four)
    case "5":
      return five
    case "5.":
      return dot(five)
    case "6":
      return six
    case "6.":
      return dot(six)
    case "7":
      return seven
    case "7.":
      return dot(seven)
    case "8":
      return eight
    case "8.":
      return dot(eight)
    case "9":
      return nine
    case "9.":
      return dot(nine)
    case "0":
      return zero
    case "0.":
      return dot(zero)
    default:
      throw unreachable(d)
  }
}

const blank = {
  top: false,
  upperLeft: false,
  upperRight: false,
  middle: false,
  lowerLeft: false,
  lowerRight: false,
  bottom: false,
  decimalPoint: false,
}

const one = {
  ...blank,
  upperRight: true,
  lowerRight: true,
}

const two = {
  ...blank,
  top: true,
  upperRight: true,
  middle: true,
  lowerLeft: true,
  bottom: true,
}

const three = {
  ...blank,
  top: true,
  upperRight: true,
  middle: true,
  lowerRight: true,
  bottom: true,
}

const four = {
  ...blank,
  upperLeft: true,
  upperRight: true,
  middle: true,
  lowerRight: true,
}

const five = {
  ...blank,
  top: true,
  upperLeft: true,
  middle: true,
  lowerRight: true,
  bottom: true,
}

const six = {
  ...blank,
  top: true,
  upperLeft: true,
  middle: true,
  lowerLeft: true,
  lowerRight: true,
  bottom: true,
}

const seven = {
  ...blank,
  top: true,
  upperLeft: true,
  upperRight: true,
  lowerRight: true,
}

const eight = {
  ...blank,
  top: true,
  upperLeft: true,
  upperRight: true,
  middle: true,
  lowerLeft: true,
  lowerRight: true,
  bottom: true,
}

const nine = {
  ...blank,
  top: true,
  upperLeft: true,
  upperRight: true,
  middle: true,
  lowerRight: true,
  bottom: true,
}

const zero = {
  ...blank,
  top: true,
  upperLeft: true,
  upperRight: true,
  lowerLeft: true,
  lowerRight: true,
  bottom: true,
}

function dot(segments: SevenSegmentViewModel): SevenSegmentViewModel {
  return {...segments, decimalPoint: true}
}
