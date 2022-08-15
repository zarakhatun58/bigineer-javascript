// continue which is in if codition that not print 

for (var i=1; i<=100; i++){
   

    if( i==10){
        continue;
    }
//    document.write(" " +i);
    console.log(i);
}

//document.write(" <h4> End</h4>");

// even number show 
for(var i=0; i<=20; i++){
    if(i % 2 ==0){
        continue;
    }
    console.log(i);
}

// odd number
var sum =0;
for(var i=0; i<=20; i++){
    if(i % 2 !==0){
        continue;
    }
    console.log(i);
    sum=sum+i;
    console.log(sum);
}