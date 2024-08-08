const acordion = document.querySelector(".acordion");
const icon = document.querySelectorAll(".icon");

console.log(icon);

icon.forEach(ele => {
    ele.addEventListener('click', function() {
        
    ele.parentElement.parentElement.children[1].classList.toggle("open")

    })
})


// icon.forEach((icons , element)=>{
//     icons.addEventListener('click' , function () {
//         icon.forEach(icone =>{
//             icone.parentElement.classList.remove('open')
//             icons.parentElement.classList.add('open')
//         })
//         title.forEach(ele=>{ele.classList.remove('open')})
//         title[element].classList.add('open')
//     })
// })



// tabs.forEach((tab , element)=>{
//     tab.addEventListener('click' , function () {
//         tabs.forEach(tab =>{
//             tab.classList.remove('active')
//         })
//         tab.classList.add('active')
//         control.forEach(ele=>{ele.classList.remove('active')})
//         control[element].classList.add('active')
//     })
// })