const more_less_box =  document.getElementById('information');
const more_less_box1 =  document.getElementById('information1');
const more_less_box2 =  document.getElementById('information2');
const more_less_box3 =  document.getElementById('information3');
const more_less_box4 =  document.getElementById('information4');




function showDiv() {

   more_less_box.classList.toggle("show")
   

   textChange()
 
   more_less_box1.classList.toggle("show")
   

   textChange()

   more_less_box2.classList.toggle("show")
   

   textChange()

   more_less_box3.classList.toggle("show")
   

   textChange()

   more_less_box4.classList.toggle("show")
   

   textChange()


}


 function textChange(){
    
    if(more_less_box.classList.contains("show")){
      document.querySelector('.readbutton').innerHTML = 'Less Information <i class="fa-solid fa-angle-up"></i>';
    } else {
      document.querySelector('.readbutton').innerHTML = 'More  information <i class="fa-solid fa-chevron-down"></i>';

    }

    if(more_less_box.classList.contains("show")){
      document.querySelector('.readbutton1').innerHTML = 'Less Information <i class="fa-solid fa-angle-up"></i>';
    } else {
      document.querySelector('.readbutton1').innerHTML = 'More  information <i class="fa-solid fa-chevron-down"></i>';

    }

    
    if(more_less_box.classList.contains("show")){
      document.querySelector('.readbutton2').innerHTML = 'Less Information <i class="fa-solid fa-angle-up"></i>';
    } else {
      document.querySelector('.readbutton2').innerHTML = 'More  information <i class="fa-solid fa-chevron-down"></i>';

    }

    
    if(more_less_box.classList.contains("show")){
      document.querySelector('.readbutton3').innerHTML = 'Less Information <i class="fa-solid fa-angle-up"></i>';
    } else {
      document.querySelector('.readbutton3').innerHTML = 'More  information <i class="fa-solid fa-chevron-down"></i>';

    }

    
    if(more_less_box.classList.contains("show")){
      document.querySelector('.readbutton4').innerHTML = 'Less Information <i class="fa-solid fa-angle-up"></i>';
    } else {
      document.querySelector('.readbutton4').innerHTML = 'More  information <i class="fa-solid fa-chevron-down"></i>';

    }





 }


 window.addEventListener("scroll", function(){

   let scroll = this.document.querySelector(".top");

   scroll.classList.toggle("active", window.scrollY > 500)
 
 })

//  function scrollToTop(){
//  window.scrollTo({
//   behavior: "smooth"
//  })

//  }

let newdate = new Date().toLocaleDateString('en-us',{year:'numeric', month:'short',day:'numeric'}) 

let datetext = "Updated: " + newdate

document.getElementById('date').innerHTML = datetext 