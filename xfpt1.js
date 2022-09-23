var body = {
  "result" : 1000,
  "msg" : "succ",
  "code" : 1001
};

var obj = JSON.stringify(body);
console.log(obj);
$done({
  body: obj,
})
