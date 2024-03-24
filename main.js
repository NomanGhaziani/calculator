import inquire from "inquirer";
const answer = await inquire.prompt([
    { message: "Enter your First NUmber", type: "Number", name: "First Number" },
    { message: "Enter your Second Number", type: "Number", name: "Second Number" },
    {
        message: "select one of operators to perform opration",
        type: "list",
        name: "operator",
        choice: ["addition", "subtraction", "multiplition", "division",],
    },
]);
if (answer.oprator === "ADDITION") {
    console.log(answer.FirstNumber + answer.SecondNumber);
}
else if (answer.oprator === "SUBTRACTION") {
    console.log(answer.FirstNumber - answer.SecondNumber);
}
else if (answer.oprator === "MULTIPICATION") {
    console.log(answer.FirstNumber * answer.SecondNumber);
}
else if (answer.oprator === "DIVISION") {
    console.log(answer.FirstNumber / answer.SecondNumber);
}
else {
    "please select correct oprator";
}
;
