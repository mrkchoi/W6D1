function final(a, b, c) {
  return a * b * c;
}

final(a, b, c);


final.myCurry(3);

Function.prototype.myCurry = function (numArgs) {
  let nums = [];
  let fcn = this;
  return function _myCurry(el) {
    nums.push(el);
    if (nums.length < numArgs) {
      return _myCurry;
    } else {
      return fcn(...nums);
    }
  };
};