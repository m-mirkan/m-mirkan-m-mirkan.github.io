document.addEventListener('DOMContentLoaded', function(){
    const sectionsIds = ['home','aboutUs','ui/ux'];
   function showSection(id){
         sectionsIds.forEach(sectionId => {
            const  element = document.getElementById(sectionId);

            if(id === sectionId){
                element.style.display ='block'

            }else{
                element.style.display ='none'

            }
         })
   }




     const links = document.querySelectorAll('.link');
     links.forEach(link =>{

        link.addEventListener('click',function(event){
            event.preventDefault();
            const sectionId = this.getAttribute('href').substring(1);
            showSection(sectionId); 
        })
     })


   showSection('home');
    
   function showWork(idWork){

    const works = document.querySelectorAll(".work") ;
    const slider = document.getElementById("slider");
    const allWorks = document.getElementById("allWorks");

    allWorks.style.display ='flex';
    slider.style.display = 'none';
     works.forEach(work =>{
        if( work.id === idWork){
            work.style.display = 'flex';
        }else{
            work.style.display = 'none';
 
        }
     })

   }

 



   const linksW = document.querySelectorAll('.linkW');
   linksW.forEach(linkW =>{
    linkW.addEventListener('click', function(event){
        event.preventDefault();
        const workId = this.getAttribute('href').substring(1);
        showWork(workId);
    })
   })

  
}  );


