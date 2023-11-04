





function backSlider(){
    const slider = document.getElementById('slider');
    const works = document.getElementById('allWorks');
    slider.style.display ='flex';
    works.style.display ='none';


}

function showPhoneNum(){
    const phone = document.getElementById('phoneIcon');
    if( phone.innerHTML == "0795639937"){
        phone.innerHTML =`   <img  class="socialpic" src="../img/phone.png">  ` ;
    }else{
        phone.innerHTML = "0795639937"
    }
   
}