
function onSubmit() {   
var firstname=document.getElementById("firstname").value;
var email=document.getElementById("email").value;
var add1=document.getElementById("add1").value;
var City=document.getElementById("City").value;
var country=document.getElementById("country").value;
var Cellphone=document.getElementById("Cellphone").value;
var popup=[];


  if( firstname==""){
       document.getElementById("firstname").style.borderColor = "red";
   }  else{
       document.getElementById("firstname").style.borderColor ="green";
   }
  if( email==""){
       document.getElementById("email").style.borderColor = "red";
  }else{
    document.getElementById("email").style.borderColor ="green";
}
  if(add1==""){
       document.getElementById("add1").style.borderColor ="red";
   }else{
    document.getElementById("add1").style.borderColor ="green";
}
   if( City==""){
       document.getElementById("City").style.borderColor = "red";
   }else{
    document.getElementById("City").style.borderColor ="green";
}
   if(country==""){
       document.getElementById("country").style.borderColor ="red";
   }else{
    document.getElementById("country").style.borderColor ="green";
}
   if(Cellphone==""){
       document.getElementById("Cellphone").style.borderColor="red";
   }else{
    document.getElementById("Cellphone").style.borderColor ="green";
}
  if(Cellphone.length<6){
      popup.push('phone number cant be less than 6 digits')
      document.getElementById("Warning").innerText=popup.join(',')
      document.getElementById("Warning").style.color="red"
      document.getElementById("Cellphone").style.borderColor ="red";
}
  }
  if(Cellphone.length>13){
    popup.push('phone number cant be less than 13 digits')
    document.getElementById("Warning").innerText=popup.join(',')
    document.getElementById("Warning").style.color="red"
    document.getElementById("Cellphone").style.borderColor ="red";

   
    }
    

    function dropdownfunction(){
        var stateInput=document.getElementById("State").value;
      var array=[]
        if(stateInput==="Telangana"){
         var array=["hyderabad","mancherial","nizambad","adilabad"];
        }else if(stateInput==="Tamilnadu"){
            var array=["chennai","coimbatore"];
        }else if(stateInput==="Karnataka"){
           var array=["bangalore"];
        }
        var string="";
        for(i=0;i<array.length;i++){
            string=string+"<option value="+array[i]+">"+array[i]+"</option>";
        }
        document.getElementById("City").innerHTML=string;
    }