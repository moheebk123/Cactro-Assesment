Array.prototype.groupBy = function (logic) {
  if (this.length === 0) {
    return {};
  }

  const grouped = {}
  this.map(el => {
    const group = logic(el);
    if (!grouped[group]) {
      grouped[group] = []
    }
    grouped[group].push(el)
  })
  return grouped;
};

const arr = [1, 2, 3];

// arr.groupBy((x) => (x % 2 === 0 ? "Even" : "Odd"));
// arr.groupBy((x) => String(x)[0]);
