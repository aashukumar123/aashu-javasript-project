const checkBoxList = document.querySelectorAll('.custom-checkbox')
const inputfeild=document.querySelectorAll('.goal-input')
const mango=document.querySelector('.mango')
const progressValue=document.querySelector('.progress-value')

checkBoxList.forEach((checkbox) => {
    checkbox.addEventListener('click', (e) => {
        const allfeild=[...inputfeild].every(function (input){
            return input.value
        })
        if(allfeild)
        {
        checkbox.parentElement.classList.toggle('completed')
        progressValue.computedStyleMap.width='33.33%'
        }
        else{
            mango.classList.add('show-error')
        }
    })
})
inputfeild.forEach((input)=>{
    input.addEventListener('focus',()=>{
        mango.classList.remove('show-error')
    })
})
