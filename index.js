import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "FirstNumber" },
    { message: "Enter Second number", type: "number", name: "secondNumber" },
    {
        message: "Select one of the operators to perform action",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
//conditional statment
if (answer.operator === "Addition") {
    console.log(answer.FirstNumber + answer.secondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.FirstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.FirstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.FirstNumber / answer.secondNumber);
}
else {
    console.log("please select valid operator");
}
