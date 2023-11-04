

function showSoftSkills(){

 const   soft = document.getElementById("softSkills");
  const  hard= document.getElementById("hardSkills");
  const   softH = document.getElementById("softH");
  const  hardH= document.getElementById("hardH");
  const softDisplay = getComputedStyle(soft).display;
  

   if(softDisplay == 'none'){

    hard.style.display= 'none';
    soft.style.display= 'flex';
    hardH.style.color= "black";
    hardH.style.backgroundColor = "white";
    softH.style.color ="white";
    softH.style.backgroundColor = "black";

}
   


}


function showHardSkills(){

    const   soft = document.getElementById("softSkills");
     const  hard= document.getElementById("hardSkills");
     const   softH = document.getElementById("softH");
     const  hardH= document.getElementById("hardH");
     const hardDisplay = getComputedStyle(hard).display;
     
   
      if(hardDisplay == 'none'){
   
       hard.style.display= 'flex';
       soft.style.display= 'none';
       hardH.style.color= "white";
       hardH.style.backgroundColor = "black";
       softH.style.color ="black";
       softH.style.backgroundColor = "white";
   
   }
      
   
   
   }