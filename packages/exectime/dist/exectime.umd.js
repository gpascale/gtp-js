(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.exectime = factory());
}(this, function () { 'use strict';

  const elapsedLabel = elapsed => {
    return elapsed == null ? ` ${''.padStart(6, '-')} ` : `${elapsed}ms`.padStart(8, ' ');
  };

  const print = (name, elapsed, label) => {
    console.log(`[exectime][${name}][${elapsedLabel(elapsed)}] ${label}`);
  };

  function index(name) {
    const start = new Date().getTime();
    print(name, null, 'BEGIN');
    const ret = function(label) {
      const elapsed = new Date().getTime() - start;
      print(name, elapsed, label);
    };
    ret.finish = () => ret('END');
    return ret;
  }

  return index;

}));
//# sourceMappingURL=exectime.umd.js.map
