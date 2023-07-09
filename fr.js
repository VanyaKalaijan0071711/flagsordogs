// const div.document.querySelector('.row')
// Promise
// PENDING
// PESOLVE
// REJECT


// const  promise =new promise((resolve,reject) =>{
//     console.log('start..')
//     setTimeout(() =>{
//         // console.log('fulfilled')
//         // resolve({status:200})
//         reject('Error..')
//     },3000)
// })
// promise.then((data) =>{
//     console.log(data)
// })


// setTimeout(() =>{
//     console.log('hello')
// },3000)
//
//
// setInterval(() =>{
//     console.log('start..')
// },2000)

//
// const div =document.querySelector('.hero')
// fetch('https://jsonplaceholder.typicode.com/photos')
// .then(data =>data.json())
// .then(res => {
//     console.log(res)
//     res.map(el =>{
//         div.innerHTML += `<div>
// <h1> ${el.id }</h1>
// <h1>${el. title }</h1>
// <img width="150px" src="$" alt="">
// </div>`
//     })
// })
// const div = document.querySelector('.hero')
// fetch('https://restcountries.com/v3.1/all')
//     .then(data =>data.json())
//     .then(res => {
//         console.log(res)
//         res.sort((a,b) => b.area - a.area ).map((el , idx ) =>{
//             div.innerHTML += `<div>
// <h1>${idx+1}</h1>
// <h2> area:${el.area} км2</h2>
// <h6> population ${el.population }</h6>
// <img  width="350px" src="${el.flags.png}"  alt="">
// <h3>${el.name.official}</h3>
// </div>`
//
//
//         })
//     })
//
const info =document.querySelector('.form-control')
const btn =document.querySelector('.btn')
const cont = document.querySelector('.bg-info')
function searchCountries (){
    const div = document.querySelector('.hero')
    fetch(`https://restcountries.com/v3.1/name/${input.value}`)
        .then(data =>data.json())
        .then(res => {
            res.map((el) => {
                .innerHTML += `<div>
<h1>${idx+1}</h1>
<h2> area:${el.area} км2</h2>
<h6> population ${el.population }</h6>
<img  width="350px" src="${el.flags.png}"  alt="">
<h3>${el.name.official}</h3>
</div>`
            })
        })

}

