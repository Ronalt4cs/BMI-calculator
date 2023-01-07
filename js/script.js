const inputWeight = document.getElementById('input-weight');
const inputHeight = document.getElementById('input-height');
const showResult = document.querySelector('.show-bmi');
const btnCalculate = document.querySelector('.btn-calculate');
const btnClear = document.querySelector('.btn-clear');
const spanError = document.querySelector('.span-error');
const spanResult = document.querySelector('.span-result');

const calculateBmi = () => {
   if (!inputHeight.value || !inputWeight.value) {
      spanError.textContent = 'Preencha o peso e a altura';
      spanResult.innerHTML = ''
      return
   }
   let weightValue = inputWeight.value;
   let heightValue = inputHeight.value;

   const bmiValue = weightValue / (heightValue * heightValue);
   spanResult.textContent = `Seu imc é: ${bmiValue.toFixed(2)}`;
}

btnCalculate.addEventListener('click', () => {
   calculateBmi();
});

btnClear.addEventListener('click', () => {
   inputWeight.value = '';
   inputHeight.value = '';
   spanResult.textContent = 'Seu IMC';
});
