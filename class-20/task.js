// write a programm that will print sum of all  divisible by 3 , 5 


var i=1;
var sum=0;
 while( i<=100){
    i=i+1;
   
  if( i% 3 ==0 && i% 5 ==0){
    //  document.write(" " + i);
     console.log(i)
    sum =sum +i;
    
  }
  
 }
 //console.log(i)
 console.log(sum)
//  document.write(sum)
//  document.write("<h2> End</h2>");
  
 