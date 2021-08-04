
function y() {   
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

function dropdown(listindex){
    document.getElementById("City").options.length=0;
    document.write('<select id="City"><option id="">select city</option></select>') 
    switch(listindex){
        case "Telangana":
    document.getElementById("City").options[0]=new Option("please select city","");
    document.getElementById("City").options[1]=new Option("MANCHERIAL","MANCHERIAL");
    document.getElementById("City").options[2]=new Option("HYDERABAD","HYDERABAD");
    document.getElementById("City").options[3]=new Option("NIZAMBAD","NIZAMBAD");
    document.getElementById("City").options[4]=new Option("ADILABAD","ADILABAD");
       break;
       case "Tamilnadu":
    document.getElementById("City").options[0]=new Option("please select city","");
    document.getElementById("City").options[1]=new Option("CHENNAI","CHENNAI");
    document.getElementById("City").options[2]=new Option("COIAMBATORE","COIAMBATORE");
    break;
    case "Maharastra":
        document.getElementById("City").options[0]=new Option("please select city","");
        document.getElementById("City").options[0]=new Option("MUMBAI","MUMBAI");
        document.getElementById("City").options[0]=new Option("PUNE","PUNE");
        break;
    }
    return true;
}

 