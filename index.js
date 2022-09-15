const ratings = document.querySelectorAll(".ratings");
const submitbtn = document.querySelector(".submit")
const question = document.querySelector(".question")
const info = document.querySelector(".info")
const star = document.querySelector(".star-div")
const ratingsbox = document.querySelector(".rating-options")
const parentdiv = document.querySelector(".container")



ratings.forEach(function(rating){
    
    
    
    rating.addEventListener("click",function(){
        ratings.forEach(function(item){
           if(item != rating){
            item.classList.remove("orange")
           }
        })
          rating.classList.toggle("orange")
    })
    
})

submitbtn.addEventListener("click",function(){
        

    ratings.forEach(function(item){
      if(item.classList.contains("orange")){
        change(item)
  }
    })

})
    
function change(item){
      star.remove()
      const div = document.createElement("div")
    //   const image = document.createElement("img")
    //     image.setAttribute("class", "thankyou-image")
    //     image.src = "images/illustration-thank-you.svg"
    
        const image1 = `<img src="images/illustration-thank-you.svg" class="thankyou-image">`
        div.innerHTML= image1
        div.style.textAlign = "center"
        parentdiv.insertBefore(div, parentdiv.children[0])



        const userrating = document.createElement("div")
        userrating.setAttribute("class", "user-info")
        userrating.innerText = "You have given " + item.innerText + " out of 5 stars"
        parentdiv.insertBefore(userrating, parentdiv.children[1])

        question.innerText = "Thank You "
        question.style.textAlign = "center"
        info.innerHTML = "We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!"
        info.style.textAlign = "center"
        ratingsbox.remove()
        submitbtn.remove()
    
}