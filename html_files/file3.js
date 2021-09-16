var st1 = "", num = 0;
var i = 0;
var arr1=[],arr2=[];
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
                    i+1;
                }
                //console.log(num);
                if(num<10)
                {
                    continue;
                }
                arr.push(num);
            }
            arr.pop();
            var g=0;
            for(var i=0;i<arr.length/2;i++)
            {
                arr1.push(arr[i]);
                g=i;
            }
            console.log("g",arr.length);
            j=0;
            l=arr.length;

            for(var j=g+1;j<l;j++)
            {
                console.log("in loop",arr[j]);
                arr2.push(arr[j]);
            }
            arr1.pop();
            console.log("Arr1",arr1);
            console.log("Arr2",arr2);
            KnapSack(arr1,arr2);
            console.log("String 1 : ", arr);
            i++;
            st = st1;
            document.getElementById("out1").innerHTML = arr1;

        }
        fr.readAsText(this.files[0]);
    })
