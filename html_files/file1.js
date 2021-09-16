var st1 = "", num = 0;
var i = 0;
document.getElementById('inputfile')
    .addEventListener('change', function () {
        i = 13;
        var k = 0, n = 0;
        var fr = new FileReader();
        fr.onload = function () {
            //document.getElementById('output') .textContent=fr.result; 
            var arr = []
            console.log(fr.result.lenght);

            for(var i=0;i<fr.result.length;i++)
            {
                num=fr.result[i];
                if(fr.result[i]==" ")
                {
                    continue;
                }
                if(fr.result[i]==" \ ")
                {
                    break;
                }
                console.log("at i",i,"on spot",fr.result[i]);
                if(fr.result[i+1]!=" ")
                {
                    k=fr.result[i];
                    n=fr.result[i+1];
                    num=+k+n;
                    if(fr.result[i+2]!=" ")
                    {
                        num=num+fr.result[i+2];
                        i=i+1;
                    }
                    i+2;
                }
                //console.log(num);
                arr.push(num);
            }
            arr.pop();
            console.log("String 1 : ", arr);
            RodCutting(arr);
            i++;
            st = st1;
            document.getElementById("out1").innerHTML = arr;

        }
        fr.readAsText(this.files[0]);
    })
