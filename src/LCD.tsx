import {h, ComponentChildren} from "preact"
import {Position} from "./Position"
import "./lcd.css"

export type SevenSegmentProps = {
  top: boolean
  upperLeft: boolean
  upperRight: boolean
  middle: boolean
  lowerLeft: boolean
  lowerRight: boolean
  bottom: boolean
  decimalPoint: boolean
}

export type CalculatorLCDProps = {
  e: boolean
  minus: boolean
  m: boolean
  digits: [
    SevenSegmentProps,
    SevenSegmentProps,
    SevenSegmentProps,
    SevenSegmentProps,
    SevenSegmentProps,
    SevenSegmentProps,
    SevenSegmentProps,
    SevenSegmentProps,
  ]
}

export function CalculatorLCD(props: CalculatorLCDProps) {
  return (
    <LCD>
      <EMinusM e={props.e} m={props.m} minus={props.minus} />
      {props.digits.map(SevenSegment)}
    </LCD>
  )
}

export function SevenSegment(props: SevenSegmentProps) {
  const style = {
    width: "60px",
    height: "83px",
    position: "relative",
    display: "inline-block",
  }
  return (
    <div style={style}>
      <Position x="3px" y="0">
        <HorizontalSegment lit={props.top} />
      </Position>
      <Position x="0" y="3px">
        <VerticalSegment lit={props.upperLeft} />
      </Position>
      <Position x="40px" y="3px">
        <VerticalSegment lit={props.upperRight} />
      </Position>
      <Position x="3px" y="38px">
        <HorizontalSegment lit={props.middle} />
      </Position>
      <Position x="0" y="40px">
        <VerticalSegment lit={props.lowerLeft} />
      </Position>
      <Position x="40px" y="40px">
        <VerticalSegment lit={props.lowerRight} />
      </Position>
      <Position x="3px" y="77px">
        <HorizontalSegment lit={props.bottom} />
      </Position>
      <Position x="50px" y="75px">
        <Dot lit={props.decimalPoint} />
      </Position>
    </div>
  )
}

export function EMinusM(props: {
  e: boolean
  minus: boolean
  m: boolean
}) {
  const style = {
    width: "40px",
    height: "83px",
    position: "relative",
    display: "inline-block",
  }
  return (
    <div style={style}>
      <Position x="3px" y="17px">
        <Text lit={props.m}>M</Text>
      </Position>
      <Position x="5px" y="18px">
        <Text lit={props.minus} fontSize="44px">
          _
        </Text>
      </Position>
      <Position x="2px" y="64px">
        <Text lit={props.e}>E</Text>
      </Position>
    </div>
  )
}

function HorizontalSegment(props: {lit: boolean}) {
  const fill = props.lit ? "#112" : "#ff00ff08"
  return (
    <svg height="6" width="40">
      <path fill={fill} d="M0 3 L3 0 H37 L40 3 L37 6 H3 Z" />
    </svg>
  )
}

function VerticalSegment(props: {lit: boolean}) {
  const fill = props.lit ? "#112" : "#ff00ff08"
  return (
    <svg height="40" width="6">
      <path fill={fill} d="M3 0 L6 3 V37 L3 40 L0 37 V 3 Z" />
    </svg>
  )
}

function Text(props: {
  lit: boolean
  fontSize?: string | null
  children: ComponentChildren
}) {
  const fill = props.lit ? "#112" : "#ff00ff08"
  return (
    <div
      style={{
        color: fill,
        fontFamily: "Arial, sans-serif",
        fontSize: props.fontSize ?? "36px",
      }}
    >
      {props.children}
    </div>
  )
}

function Dot(props: {lit: boolean}) {
  const fill = props.lit ? "#112" : "#ff00ff08"
  return (
    <svg height="6" width="6">
      <circle fill={fill} cx="3" cy="3" r="3" />
    </svg>
  )
}

export function LCD(props: {children: ComponentChildren}) {
  return <div className="LCD">{props.children}</div>
}
