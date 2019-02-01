let f = ["apple","orange","mango"];

let p = [5,10,25];

let m = [];

for(let pindex=0 ; pindex<p.length;pindex++)
{
    for(let findex=0; findex<f.length; findex++)
    {
        m.push(f[findex] +" price is :"+ p[pindex] );
    }
    m.push("-----------------------");
}
console.log(m);

