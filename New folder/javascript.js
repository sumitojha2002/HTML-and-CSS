function multiplication(){
    const a = document.getElementById("ones");
    const ones = +a.value;
    for(let i=1;i<=10;i++)
    {
        let d = document.getElementById(i+10);
        let g = document.getElementById(i);
        let e= +g.value;
        e=ones*i;
        d.innerText=ones;
        g.innerText=e;
    }
}