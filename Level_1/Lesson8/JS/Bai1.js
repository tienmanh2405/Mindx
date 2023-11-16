n = parseInt(prompt("Nhap vao so N: "));
if(n<=2)
    console.log("Số" + n + "không phải là số nguyên tố");
else{
    var count = 0;
    for(i=2;i<Math.sqrt(n);i++){
        if(n%i==0)
            count++;
    }
    if(count ==0)
        console.log("Số " + n + " là số nguyên tố");
    else
        console.log("Số " + n + " không phải là số nguyên tố");
}