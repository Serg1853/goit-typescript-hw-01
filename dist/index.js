import { concatenation } from "./concatenation";
const button = document.querySelector("button");
const input = document.querySelector("input");
if (button && input) {
    button.addEventListener("click", () => {
        concatenation(input.value, "hello!");
    });
}
let Arr;
Arr = [1, 2, 3];
let users = [{ name: "Tom", age: 34 }];
const numbers = [1, 2, 3, 4, 5, 6, 7];
numbers.push(22);
//# sourceMappingURL=index.js.map