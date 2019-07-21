'use strict';

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

module.exports = index;
//# sourceMappingURL=exectime.js.map
