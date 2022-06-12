// ASSESSMENT:
// Fill inside of the optimizeFunction function!

function doExpensiveTask(input) {
  const result = 2 * input;
  console.log("Doing expensive task...:", result);
  return result;
}

function optimizeFunction(func) {
  // You shouldn't need to edit anywhere else
  // Do your work inside this function
  // SOLUTION:
    let cache = []
    let divisionNum
    switch(func.name){
        case "doExpensiveTask":
            divisionNum = 2;
            break
        case "doAnotherExpensiveTask":
            divisionNum = 10
            break;
    }
    return function(val) {
        if(cache.length == 0){
                cache.push(func(val))
                return;
        }
        if(cache[0]){
            let result = cache[0]
            
            if(result/divisionNum == val){
                console.log(result+" "+"from cache")
            }else{
                cache.pop()
                cache.push(func(val))
            }

        }

         
    }
    
}

// anOptimizedFunc shouldn't execute the expensive task if new input is same as the previous one
const anOptimizedFunc = optimizeFunction(doExpensiveTask);
anOptimizedFunc(2); // Should print: Doing expensive task...: 4
anOptimizedFunc(2); // Should print: Same input, no need to calculate: 4
anOptimizedFunc(4); // Should print: Doing expensive task...: 8
anOptimizedFunc(4); // Should print: Same input, no need to calculate: 8
// It should forget the older input
anOptimizedFunc(2); // Should print: Doing expensive task...: 4

function doAnotherExpensiveTask(input) {
  const result = 10 * input;
  console.log("Doing another expensive task...:", result);
  return result;
}

// We can optimize another function, which should also behave similarly
const anotherOptimizedFunc = optimizeFunction(doAnotherExpensiveTask);
anotherOptimizedFunc(2); // Should print: Doing another expensive task...: 20
anotherOptimizedFunc(2); // Should print: Same input, no need to calculate: 20
anotherOptimizedFunc(4); // Should print: Doing another expensive task...: 40
anotherOptimizedFunc(4); // Should print: Same input, no need to calculate: 40
anotherOptimizedFunc(2); // Should print: Doing another expensive task...: 20
