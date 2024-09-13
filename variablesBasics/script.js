let userName = "Brad";
userName = "Jenna";

function getUserNameLength(name) {
  return result = name.length;
}

console.log(getUserNameLength(userName) > 4)
// ^______________ Should log true

const isString = function(anyKind) {
    return (typeof anyKind) === "string";
}
// TODO: Implement the isString function

console.log(isString("Hello"));
// result should be true

console.log(isString(3));
// result should be false

console.log(isString(undefined));
// result should be false

console.log(isString(""));
// result should be true

console.log(isString("John" + "Doe"));
// result should be true