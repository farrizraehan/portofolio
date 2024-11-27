function appendNumber(number) {
    const result = document.getElementById("result");
    result.value += number;
  }
  
  function appendOperator(operator) {
    const result = document.getElementById("result");
    result.value += operator;
  }
  
  function clearDisplay() {
    document.getElementById("result").value = "";
  }
  
  function deleteLast() {
    const result = document.getElementById("result");
    result.value = result.value.slice(0, -1);
  }
  
  function calculate() {
    const result = document.getElementById("result");
    try {
      result.value = eval(result.value); 
    } catch (error) {
      result.value = "Error";
    }
  }
  