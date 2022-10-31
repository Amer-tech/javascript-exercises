const ftoc = function (Fnum) {
  let C = (Fnum - 32) * 5 / 9
  return Math.round(C * 10) / 10
};

const ctof = function (Cnum) {
  let F = (Cnum * 9 / 5 + 32)
  return Math.round(F * 10) / 10
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
