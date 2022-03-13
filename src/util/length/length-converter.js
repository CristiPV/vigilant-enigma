class Length {
  /**
   * Builds a Length object with the given `measure` in the provided `system`.
   * @param {Number} measure The numeric measure to convert with up to two decimals.
   * @param {String} system The system of said measure (Metric or Imperial)
   */
  constructor(measure, system) {
    this.measure = parseFloat(Number(measure).toFixed(2));
    this.system = this.isValidSystem(system) || "Metric";
  }

  /**
   * Converts the measure from one metric system to another.
   * @returns The value of the conversion with up to two decimals.
   */
  convert() {
    if (this.system === "Metric") {
      return (this.measure * 0.39).toFixed(2);
    }
    return (this.measure * 2.54).toFixed(2);
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
  isValidSystem(system) {
    if (system === "Metric" || system === "Imperial") {
      return true;
    }
    return false;
  }
}

export default Length;
