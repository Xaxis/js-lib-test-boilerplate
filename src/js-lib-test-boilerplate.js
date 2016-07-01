var LIB = (function(lib) {

  /**
   * A library method.
   */
  lib.method1 = function(a, b) {
    return a * b;
  };

  return {
    method1: lib.method1
  };
}(LIB || {}));
