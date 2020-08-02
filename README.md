# JavaScript-Boot-Camp-assessment 

<p>
 <img scr="https://github.com/HarunHM/JavaScript-Boot-Camp-assessment-/blob/master/add.png"> 
</p>



### #100DaysOfJavaScript with Lux First assessment

Question 1). What will the code below output? Explain your answer.

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





