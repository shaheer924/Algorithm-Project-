var st1="",st2="",st="";
    var i=0;
        document.getElementById('inputfile') 
            .addEventListener('change', function() { 
              i=13;
            var fr=new FileReader(); 
            fr.onload=function(){ 
                //document.getElementById('output') .textContent=fr.result; 
                        for(i=0;i<100;i++)
                        {
                            st1 = st1.concat(fr.result[i]);
                            if(fr.result[i]=="\n" || fr.result[i]==null)
                            {
                                break;
                            }
                        }
                        for(i=i+1;i<200;i++)
                        {
                            st2 = st2.concat(fr.result[i]);
                            if(fr.result[i]=="\n" || fr.result[i]==null)
                            {
                                break;
                            }
                        }
                        console.log(fr.result[i+1],": ",i);
                        console.log("String 1 : ",st1);
                        console.log("string 2 : ",st2);
                        i++;
                        st=st1;
                        document.getElementById("out1").innerHTML=st1;   
                        document.getElementById("out2").innerHTML=st2;
                        LCS(st1,st2);
                        //SCS(st1,st2);
            } 
            fr.readAsText(this.files[0]); 
        })
