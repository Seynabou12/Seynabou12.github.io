window.onload = () => {
    let sections = document.querySelectorAll(".secondary")
    let menus = document.querySelectorAll(".menu-secondaire")
    
    window.addEventListener('scroll', ()=>{
        
        sections.forEach((elt,index)=>{

            elt = sections[index].getBoundingClientRect()

            if(elt.y <= 0 &&  elt.y + elt.height >= 500) {
                if (!menus[index].classList.contains("sp-hidden-left")) {
                    menus[index].classList.toggle("sp-hidden-left")
                    menus[index].classList.toggle("classOn")
                    menus[index].style.display= "inline-block"
                }
            } else if (menus[index].classList.contains("sp-hidden-left")) {
                menus[index].classList.toggle("sp-hidden-left")
                menus[index].style.display= "none"
            }   
        })
    })
}