let displayVal = document.querySelector(".display");

let args = [];
let ops = [];
let arg1 = "";
let arg2 = "";
let op = "";
let register = "";

//keyboard logic
window.addEventListener('keydown', function(e){
    console.log(e.key);
	if (isFinite(e.key)){
		updateDisplay(e.key);
	}
    else if(e.key === "/"){
        computeOperand(e.key);
    }
    else if(e.key === "*"){
        computeOperand(e.key);
    }
    else if(e.key === "+"){
        computeOperand(e.key);
    }
    else if(e.key === "-"){
        computeOperand(e.key);
    }
    else if(e.key === "."){
        addDecimal();
    }
    else if(e.key === "Enter"){
        computeEquals();
    }
},false);



function operate(val1, val2, operand) {
	let firstValue = Number(val1);
	let secondValue = Number(val2);
	if (operand === "*") {
		return firstValue * secondValue;
	}
	if (operand === "/") {
		if (val2 == 0) {
			return NaN;
		} else {
			return firstValue / secondValue;
		}
	}
	if (operand === "+") {
		return firstValue + secondValue;
	}
	if (operand === "-") {
		return firstValue - secondValue;
	}
}


function updateDisplay(number) {
    let effect = document.querySelector("#number"+number);
    //console.log(effect);
    //effect.style.backgroundColor = "white";
    //effect.style.backgroundColor = "lightgoldenrodyellow";

	if (register === "0") {
		register = "";
	}
	register += number;
	displayVal.textContent = register;
	console.log(register);
}


function addDecimal() {
	if (!register.includes(".")) {
		register += ".";
		displayVal.textContent = register;
		console.log(register);
	}
}


function zeroDisplay() {
	register = "0";
	displayVal.textContent = "0";
	args = [];
	ops = [];
}


function computeOperand(operand) {
	if (register) {
		args.push(register);
		ops.push(operand);
		register = "";
	} else {
		ops.shift();
		ops.push(operand);
	}
	if (ops.length >= 2) {
		let result = operate(args.shift(), args.shift(), ops.shift());
		console.log(result);
		if (Number.isNaN(result)) {
			ops.shift();
			args = [];
			ops = [];
		} else {
			args.push(result);
		}
		displayVal.textContent = Math.round(result * 1000) / 1000;
	}
	console.log(args);
	console.log(ops);
}


function computeEquals() {
	if (register) {
		args.push(register);
		register = "";
	}
	if (ops.length >= 1) {
		let result = operate(args.shift(), args.shift(), ops.shift());
		console.log(!Number.isNaN(result));
		if (Number.isNaN(result)) {
			ops.shift();
			args = [];
			ops = [];
		} else {
			args.push(result);
		}
		displayVal.textContent = Math.round(result * 1000) / 1000;
	}
	console.log(args);
	console.log(ops);
    
}

function negativeOperand(){
    if (register){
        register = register * -1;
        displayVal.textContent = register;
        console.log(register);
    }
}
