/*window.addEventListener('load', () => {
    const params = (new URL(document.location)).searchParams;
    const vname = params.get('vname');
    const blockno = params.get('blockno');  
    const gender = params.get('gender');
    const phn = params.get('phn');
    const purpose = params.get('purpose');

    document.getElementById('result-name').innerHTML = vname;
    document.getElementById('result-flat').innerHTML = blockno;
    document.getElementById('result-gender').innerHTML = gender;
    document.getElementById('result-number').innerHTML = phn;
    document.getElementById('result-purpose').innerHTML = purpose;

})*/

function show(){
    visname = localStorage.getItem("NAME");
    flatno = localStorage.getItem("FLAT");
    visgender = localStorage.getItem("GENDER");
    visphn = localStorage.getItem("PHONE");
    vispurpose = localStorage.getItem("PURPOSE");

    document.getElementById("result-name").innerHTML = visname;
    document.getElementById("result-flat").innerHTML = flatno;
    document.getElementById("result-gender").innerHTML = visgender;
    document.getElementById("result-number").innerHTML = visphn;
    document.getElementById("result-purpose").innerHTML = vispurpose;
   
}
function inform(){
    window.alert("Owner has been informed about the visitor");
    window.location = "security-home.html";
}

function accept(){
    document.getElementById("accept").innerHTML="Accepted";
    window.alert("You have accepted the visitor's entry. Visitor will soon be visiting your apartment. Thank you.");
    alert("You will now be redirected to the Home Page.");

setTimeout(function(){
    window.location = "security-home.html";
   },1500); //delay is in milliseconds 

    
}
function reject(){
    document.getElementById("reject").innerHTML="Rejected";
    window.alert("You have rejected the visitor's entry. Visitor will be prohibited from entering. Thank you.");
    alert("You will now be redirected to the Home Page.");

setTimeout(function(){
    window.location = "security-home.html";
   },1500); //delay is in milliseconds 

    
}
    
function back(){
        window.location = "visitorEntry-index.html";
}
function back1(){
    window.location = "security-home.html";
}

