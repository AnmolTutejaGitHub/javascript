//wesite for icon  : https://fontawesome.com/




let toastBox=document.getElementById("toastBox");
let successMsg=`<i class="fa-solid fa-circle-check"></i> Successfully submitted`;
 let errorMsg=`<i class="fa-solid fa-circle-xmark"></i> Please fix the error`;
 let invalidMsg=`<i class="fa-solid fa-circle-exclamation"></i> Invalid input please check again`

function showToast(msg){
    //creating element 
   let toast= document.createElement('div')  //creating a div element on calling this function 
   toast.classList.add("toast"); //adding class name toast
   toast.innerHTML=msg;
   //adding this element indise which we want 
   toastBox.appendChild(toast)


   if(msg.includes("error")){
    toast.classList.add('error')
   }

   if(msg.includes("Invalid")){
    toast.classList.add('invalid')
   }



   //script to delele message div we created after few seconds 

   setTimeout(()=>{toast.remove();},6000)

}