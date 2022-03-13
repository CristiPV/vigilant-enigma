import Length from "./length-converter.js";

const constructorTestCases = [
  [
    [-1, "Metric"],
    [0, "Metric"],
  ],
  [
    [0, "Imperial"],
    [0, "Imperial"],
  ],
  [
    [1, "metric"],
    [1, "Metric"],
  ],
  [
    [4503, "imperial"],
    [4503, "Metric"],
  ],
  [
    [9007199254740991, "Hello world!"],
    [9007199254740991, "Metric"],
  ],
  [
    [9007199254740992, 19983],
    [9007199254740992, "Metric"],
  ],
  [
    [0.1, "Metric"],
    [0.1, "Metric"],
  ],
  [
    [1231.8, "Imperial"],
    [1231.8, "Imperial"],
  ],
  [
    [9007199254740990.9, "metric"],
    [9007199254740990.9, "Metric"],
  ],
  [
    [0.01, "imperial"],
    [0.01, "Metric"],
  ],
  [
    [881311.73, "Hello world!"],
    [881311.73, "Metric"],
  ],
  [
    [9007199254740990.99, 19983],
    [9007199254740990.99, "Metric"],
  ],
  [
    ["-1", "Metric"],
    [0, "Metric"],
  ],
  [
    ["0", "Imperial"],
    [0, "Imperial"],
  ],
  [
    ["1", "metric"],
    [1, "Metric"],
  ],
  [
    ["886765", "imperial"],
    [886765, "Metric"],
  ],
  [
    ["9007199254740991", "Hello world!"],
    [9007199254740991, "Metric"],
  ],
  [
    ["9007199254740992", 19983],
    [9007199254740992, "Metric"],
  ],
  [
    ["0.1", "Metric"],
    [0.1, "Metric"],
  ],
  [
    ["678.3", "Imperial"],
    [678.3, "Imperial"],
  ],
  [
    ["9007199254740990.9", "metric"],
    [9007199254740990.9, "Metric"],
  ],
  [
    ["0.01", "imperial"],
    [0.01, "Metric"],
  ],
  [
    ["912.5", "Hello world!"],
    [912.5, "Metric"],
  ],
  [
    ["9007199254740990.99", 19983],
    [9007199254740990.99, "Metric"],
  ],
  [
    [0.0001, "Metric"],
    [0, "Metric"],
  ],
  [
    [4.933134, "Imperial"],
    [4.93, "Imperial"],
  ],
  [
    [9007199254740990.999, "metric"],
    [9007199254740990.99, "Metric"],
  ],
  [
    [-9007199254740992, "imperial"],
    [0, "Metric"],
  ],
  [
    [-9007199254740991, "Hello world!"],
    [0, "Metric"],
  ],
  [
    [-713277, 19983],
    [0, "Metric"],
  ],
  [
    [-9007199254740990.9, "Metric"],
    [0, "Metric"],
  ],
  [
    [-1233.4, "Imperial"],
    [0, "Imperial"],
  ],
  [
    [-0.1, "metric"],
    [0, "Metric"],
  ],
  [
    [-9007199254740990.99, "imperial"],
    [0, "Metric"],
  ],
  [
    [-887346.75, "Hello world!"],
    [0, "Metric"],
  ],
  [
    [-0.01, 19983],
    [0, "Metric"],
  ],
  [
    ["Hello world", 19983],
    [0, "Metric"],
  ],
];

const convertTestCases = [
  [new Length(1.43, "Metric"), 0.56],
  [new Length(0.56, "Imperial"), 1.42],
  [new Length(5, "Imperial"), 12.7],
  [new Length(89, "Metric"), 35.04],
];

describe("Length: constructor()", () => {
  /*
    System partitions:
    - Valid values partitions: 
      * Accepted systems: 'Metric', 'Imperial'
    - Invalid values partitions:
      * Lowercase variant of the accepted systems: 'metric', 'imperial'
      * any other string: 'Hello world!'
      * any number: 19983

    Measure Partitions:
    - Valid values partitions:
      * Numbers with up to two decimals: 0 - 9007199254740991
                                         0.1 - 9007199254740990.9
                                         0.01 - 9007199254740990.99
      * Strings representing numbers up to two decimals: '0' - '9007199254740991'
                                                         '0.1' - '9007199254740990.9'
                                                         '0.01' - '9007199254740990.99'
    - Invalid values partitions:
      * Numbers with more than two decimals: 0.001 - 9007199254740990.999
      * Negative numbers: -9007199254740991 - -1
                          -9007199254740990.9 - -0.1
                          -9007199254740990.99 - -0.01
      * Numbers outside of the safe range: -9007199254740992, 9007199254740992
      * Strings: 'Hello world'
    
    System test cases: 'Metric', 'Imperial', 'metric', 'imperial', 'Hello world!', 19983

    Measure test cases: -1, 0, 1, 4503, 9007199254740991, 9007199254740992
                        0.1, 1231.8, 9007199254740990.9
                        0.01, 881311.73, 9007199254740990.99
                        '-1', '0', '1', '886765', '9007199254740991', '9007199254740992'
                        '0.1', '678.3', '9007199254740990.9'
                        '0.01', '912.5', '9007199254740990.99'
                        0.0001, 4.933134, 9007199254740990.999
                        -9007199254740992, -9007199254740991, -713277
                        -9007199254740990.9, -1233.4, -0.1
                        -9007199254740990.99, -887346.75, -0.01
                        'Hello world'

    */
  it.each(constructorTestCases)(
    "expect '%s' to become '%s'",
    (testValues, expectedValues) => {
      // Given
      const measure = testValues[0];
      const system = testValues[1];

      // When
      const length = new Length(measure, system);

      // Then
      expect(length.measure).toBe(expectedValues[0]);
      expect(length.system).toBe(expectedValues[1]);
    }
  );
});

describe("Length: convert()", () => {
  it.each(convertTestCases)(
    "expect Length '%s' to convert to '%s'",
    (length, conversion) => {
      // Given
      const lengthUnderTest = length;

      // When
      const convertedLength = lengthUnderTest.convert();

      // Then
      expect(convertedLength).toBe(conversion);
    }
  );
});
