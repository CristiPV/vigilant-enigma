class Length {
  /**
   * Builds a Length object with the given `measure` in the provided `system`.
   * @param {Number} measure The numeric measure to convert with up to two decimals.
   * @param {String} system The system of said measure (Metric or Imperial)
   */
  constructor(measure, system) {
    this.measure = this.#isPositiveMeasure(measure) ? parseFloat(Number(measure).toFixed(2)) : 0;
    this.system = this.#isValidSystem(system) ? system : "Metric";
  }

  /**
   * Converts the measure from one metric system to another.
   * @returns The value of the conversion with up to two decimals.
   */
  convert() {
    if (this.system === "Metric") {
      return Number((this.measure / 2.54).toFixed(2));
    }
    return Number((this.measure * 2.54).toFixed(2));
  }

  /**
   * Checks if the system is valid or not.\
   * Valid systems are:
   * - Metric
   * - Imperial
   *
   * @param {String} system The system of measure (Metric or Imperial)
   * @returns {boolean} Whether the system is valid or not.
   */
  #isValidSystem(system) {
    if (system === "Metric" || system === "Imperial") {
      return true;
    }
    return false;
  }

  /**
   * Checks if the measure is a positive number.
   * @param {Number} measure The numeric measure to convert with up to two decimals.
   * @returns Whether the measure is positive or not
   */
  #isPositiveMeasure(measure) {
      return Number(measure) >= 0 ? true : false;
  }
}

export default Length;
