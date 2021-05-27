function sum(req, res){

    let {num1, num2} = req.params;
    [num1, num2] = [Number(num1), Number(num2)];

    const result = num1 + num2;
    res.json({result : result});

}
function sub(req, res){

    let {num1, num2} = req.params;
    [num1, num2] = [Number(num1), Number(num2)];

    const result = num1 - num2;
    res.json({result : result});

}
function mul(req, res){

    let {num1, num2} = req.params;
    [num1, num2] = [Number(num1), Number(num2)];

    const result = num1 * num2;
    res.json({result : result});

}
function div(req, res){

    let {num1, num2} = req.params;
    [num1, num2] = [Number(num1), Number(num2)];

    const result = num1 / num2;
    res.json({result : result});

}

module.exports = {

    sum, sub, mul, div

}