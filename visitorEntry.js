function submit(){
    const vname = document.getElementById("vname").value;
    const blockno = document.getElementById("blockno").value;
    const gender = document.getElementById("gender").value;
    const phn = document.getElementById("phn").value;
    const purpose = document.getElementById("purpose").value;

    localStorage.setItem("NAME", vname);
    localStorage.setItem("FLAT", blockno);
    localStorage.setItem("GENDER", gender);
    localStorage.setItem("PHONE", phn);
    localStorage.setItem("PURPOSE", purpose);

    
    window.location = "owner.html";
    return;
}

    