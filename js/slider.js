(function(){
    const sliders = [...document.querySelectorAll('.testimonyBody')];//Constante que captura todos los elementos con la clase testimonyBody(Cómo un array por los ...)
    const buttonAfter = document.querySelector('#after');//constante para el botón de after →
    const buttonBefore = document.querySelector('#before');
    let value;

    buttonAfter.addEventListener('click', () =>{
        changePosition(1);
    });

    buttonBefore.addEventListener('click', () =>{
        changePosition(-1);
    });
    
    const changePosition = (add)=>{//Creamos la función change position con un argumento 
        const currentTestimony = document.querySelector('.testimonyBody--show').dataset.id;
        value = Number(currentTestimony);
        value+=add;

        sliders[Number(currentTestimony)-1].classList.remove('testimonyBody--show');
        if(value === sliders.length+1 || value === 0){//Si el valor es mayor al número de sliders o si es menor
            value = value === 0? sliders.length : 1; //Operador ternario? (Si el valor es igual a 0 entonces vamos al ultimo slider) de lo contrario que lo mande al primero(se puede así porque en el if ya se validó que solo entrará si el valor es mayor a la logjitud o 0)
        }
        //Accedemos al elemento [0 = 1][1 = 2][2 = 3] por eso el -1

        sliders[value-1].classList.add('testimonyBody--show'); 
        console.log(value)
    }
})();//Función que se llama a si misma