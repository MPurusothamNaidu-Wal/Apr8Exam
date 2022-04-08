const { add } = require("../libs/calculations");

const testAdd = (req, res) => {
    var a = 2;
    var b = 4;
    var c = 6;
    if (add(a, b, c) == 12) {
        res.send(`Add Test Pass`)
    }
    else {
        res.send("Add test Fail")
    }
}

module.exports = { testAdd };