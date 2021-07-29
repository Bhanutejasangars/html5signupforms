


var a=document.getElementById("firstname").value;
var b=document.getElementById("email").value;
var c=document.getElementById("add1").value;
var d=document.getElementById("City").value;
var e=document.getElementById("country").value

function x(){
   if( a==""){
       document.getElementById("firstname").style.borderColor = "red";
   }  
  if( b==""){
       document.getElementById("email").style.borderColor = "red";
  }
  if(c==""){
       document.getElementById("add1").style.borderColor ="red";
   }
   if( d==""){
       document.getElementById("City").style.borderColor = "red";
   }
   if(e==""){
       document.getElementById("country").style.borderColor ="red";
   }
}
