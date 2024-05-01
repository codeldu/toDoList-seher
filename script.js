const inputAdd = document.querySelector('#todoInput');
const addBtn = document.querySelector('#addBtn');
const container = document.querySelector('#container');


addBtn.addEventListener('click', ()=>{

    if (!inputAdd.value) return;

    // container.innerHTML += 
    //    `
    //    <div class="wrapper">
    //         <input type="checkbox" class="myCb">
    //         <p>${inputAdd.value}</p>
    //         <button class="delete">Delete</button>
    //     </div>
       
    //    `

    let wrapperDiv = document.createElement('div');
    wrapperDiv.classList.add('wrapper');


    let checkboxElement = document.createElement('input')
    checkboxElement.type = 'checkbox';
    checkboxElement.classList.add('myCb');

    let pElement = document.createElement('p');
    pElement.innerText = inputAdd.value;

    let btnElement = document.createElement('button');
    btnElement.innerText = "Delete"
    btnElement.classList.add('delete');

    wrapperDiv.append(checkboxElement, pElement , btnElement);

    container.appendChild(wrapperDiv)


    
    inputAdd.value = "";

    const myCheckBoxes = document.querySelectorAll('.myCb')
    console.log(myCheckBoxes);

    myCheckBoxes.forEach(huseynagha => {
        huseynagha.addEventListener('input', (e)=>{
            if (e.target.checked) {
               e.target.nextElementSibling.style.textDecoration = 'line-through'
            }else{
                e.target.nextElementSibling.style.textDecoration = 'none'
            }
        })
    })

    const delBtns = document.querySelectorAll('.delete');

    delBtns.forEach(nuray => {
        nuray.addEventListener('click', (e)=>{
         e.target.parentElement.parentElement.removeChild(e.target.parentElement)
        })
    })

})



