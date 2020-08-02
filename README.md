# JavaScript-Boot-Camp-assessment 


### #100DaysOfJavaScript with Lux First assessment


#### Question 1). What will the code below output? Explain your answer.

```
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 == 0.3);
```

###### Answer:

<p>
 “You can’t be sure. it might print out 0.3 and true, or it might not. Numbers in JavaScript are all treated with floating point precision, and as such, may not always yield the expected results.” </p>

<p> The example provided above is classic case that demonstrates this issue. Surprisingly, it will print out: </p>

```
0.30000000000000004
false
```

<p> A typical solution is to compare the absolute difference between two numbers with the special constant Number.EPSILON: </p>



```
function areTheNumbersAlmostEqual(num1, num2) {
	return Math.abs( num1 - num2 ) < Number.EPSILON;
}
console.log(areTheNumbersAlmostEqual(0.1 + 0.2, 0.3));
```


#### Question 2). What is NaN? What is its type? How can you reliably test if a value is equal to NaN?

###### Answer:
<p> The NaN property represents a value that is “not a number”. This special value results from an operation that could not be performed either because one of the operands was non-numeric (e.g., "abc" / 4), or because the result of the operation is non-numeric.</p>

<p> While this seems straightforward enough, there are a couple of somewhat surprising characteristics of NaN that can result in hair-pulling bugs if one is not aware of them. </p>

<p> For one thing, although NaN means “not a number”, its type is, believe it or not, Number: </p>


```
console.log(typeof NaN === "number");  // logs "true"
```

<p> Additionally, NaN compared to anything – even itself! – is false: </p>

```
console.log(NaN === NaN);  // logs "false"
```

<p> A semi-reliable way to test whether a number is equal to NaN is with the built-in function isNaN(), but even using isNaN() is an imperfect solution.</p>

<p> A better solution would either be to use value !== value, which would only produce true if the value is equal to NaN. Also, ES6 offers a new Number.isNaN() function, which is a different and more reliable than the old global isNaN() function. </p>



### Question 3. What would the following lines of code output to the console?


```
console.log("0 || 1 = "+(0 || 1));
console.log("1 || 2 = "+(1 || 2));
console.log("0 && 1 = "+(0 && 1));
console.log("1 && 2 = "+(1 && 2));
```

#### Answer:

The code will output the following four lines:

```
0 || 1 = 1
1 || 2 = 1
0 && 1 = 0
1 && 2 = 2

```

<p> In JavaScript, both <code> || </code> and <code>  && </code> are logical operators that return the first fully-determined “logical value” when evaluated from left to right. </p>


### 4.Name two programming paradigms important for JavaScript app developers?


#### Answer:

<p>JavaScript is a multi-paradigm language, supporting imperative/procedural programming along with OOP (Object-Oriented Programming) and functional programming. JavaScript supports OOP with prototypal inheritance.</p>

 More Questions for practice: 👉 https://medium.com/javascript-scene/10-interview-questions-every-javascript-developer-should-know-6fa6bdf5ad95#:~:text=1.,supports%20OOP%20with%20prototypal%20inheritance.
 


<p>
 <img scr = "https://github.com/HarunHM/JavaScript-Boot-Camp-assessment-/blob/master/add.png"> 
</p>

