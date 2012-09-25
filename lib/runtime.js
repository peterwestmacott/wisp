// Generated by LispyScript v0.2.1
var isOdd = function(n) {
  return ((n % 2) === 1);
};

var isDictionary = function(form) {
  return ((form && (typeof(form) === "object")) && ((Object.getPrototypeOf(form) && (typeof(Object.getPrototypeOf(form)) === "object")) && (Object.getPrototypeOf(Object.getPrototypeOf(form)) == null)));
};

var dictionary = function() {
  return (function loop(keyValues, result) {
    var recur = loop;
    while ((recur === loop)) {
      recur = (keyValues).length ?
        (function() {
          result[keyValues[0]] = keyValues[1];
          return (keyValues = keyValues.slice(2),
           result = result,
           loop);
        })() :
        result
    };
    return recur;
  })(Array.prototype.slice.call(arguments), {});
};

var keys = function(dictionary) {
  return Object.keys(dictionary);
};

var vals = function(dictionary) {
  return keys(dictionary).map(function(key) {
    return dictionary[key];
  });
};

var merge = function() {
  return Object.create(Object.prototype, Array.prototype.reduce.call(arguments, function(descriptor, dictionary) {
    (dictionary && (typeof(dictionary) === "object")) ?
      Array.prototype.forEach.call(Object.keys(dictionary), function(name) {
        return descriptor[name] = Object.getOwnPropertyDescriptor(dictionary, name);
      }) :
      void 0;
    return descriptor;
  }, Object.create(Object.prototype)));
};

var isVector = function(form) {
  return (Object.prototype.toString.call(form) === '[object Array]');
};

var isContainsVector = function(vector, element) {
  return (vector.indexOf(element) >= 0);
};

var mapDictionary = function(source, f) {
  return dictionary(Array.prototype.reduce.call(Object.keys(source), function(target, key) {
    return target[key] = f(source[key]);
  }, {}));
};

exports.isDictionary = isDictionary;
exports.dictionary = dictionary;
exports.merge = merge;
exports.isOdd = isOdd;
exports.isVector = isVector;
exports.mapDictionary = mapDictionary;
exports.isContainsVector = isContainsVector;
exports.keys = keys;
exports.vals = vals;
