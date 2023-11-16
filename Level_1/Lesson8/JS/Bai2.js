// Tính giai thừa của  một số
n = parseInt(prompt("Nhap vao so N: "));
var GT = 1;
if(n == 0)
    console.log("Gai thua so N la: ",GT);
else
    for(i=1;i<=n;i++){ GT*=i;}
    console.log("Gai thua so N la: ",GT);  

