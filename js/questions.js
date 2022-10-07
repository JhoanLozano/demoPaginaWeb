(function(){
    const titleQuestions = [...document.querySelectorAll('.questionTitle')];
    // console.log(titleQuestions);
    titleQuestions.forEach(question =>{
        question.addEventListener('click',()=>{
            let height = 0;
            let answer = question.nextElementSibling;
            let addPadding = question.parentElement.parentElement;

            addPadding.classList.toggle('questionsPadding--add');//Agregamos o quitamos la clase dependiendo de si la tiene
            question.children[0].classList.toggle('questionArrow--rotate');//Agregamos o quitamos la clase dependiendo de si la tiene
            if(answer.clientHeight === 0){
                height = answer.scrollHeight;//Le asignamos a la variable height el valor de scrollHeight(el alto mínimo para que se muestre)
            }
            answer.style.height = `${height}px`;//`` con alt + 96 - usamos template literal
        });
    });
})();