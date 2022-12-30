export function unreachable(impossible: never): Error {
  return new Error(
    "Unreachable code executed with impossible value " +
      JSON.stringify(impossible),
  )
}

test("unreachable", {
  "represents undefined"() {
    expect(
      // @ts-ignore
      unreachable(),
      equals,
      Error(
        "Unreachable code executed with impossible value undefined",
      ),
    )
  },

  "quotes a string"() {
    expect(
      // @ts-ignore
      unreachable("blah"),
      equals,
      Error('Unreachable code executed with impossible value "blah"'),
    )
  },
})
