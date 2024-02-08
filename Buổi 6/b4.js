function validateForm(){
    var x;
    x=document.forms["frm_dk"]["txt_ho"].value;
    if(x==""){
        alert("Bạn chưa nhập họ");
        return false;
    }
    x=document.getElementById("txt_ten").value;
    if(x==""){
        alert("Bạn chưa nhập tên");
        return false;
    }
    x=document.getElementById("txt_dienthoai").value;
    if(isNaN(x)||length(x)==0||length(x)>10){
        alert("điện thoại phải có số, mời nhập lại");
        return false;
    }
}