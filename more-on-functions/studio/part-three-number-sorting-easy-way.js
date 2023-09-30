//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];


//Sort each array in ascending order.
let sortedArrayAsc=function (array){
   for(i=0;i<array.length;i++){
    for(j=0;j<array.length-i-1;j++){
        if(array[j]>array[j+1]){
            let temp=array[j];
            array[j]=array[j+1];
            array[j+1]=temp;
        }
    }
   }
   return array;
}

    console.log(sortedArrayAsc(nums1));

//Sort each array in decending order.
let sortedArrayDsc=function (array){
    for(i=0;i<array.length;i++){
     for(j=0;j<array.length-i-1;j++){
         if(array[j]<array[j+1]){
             let temp=array[j];
             array[j]=array[j+1];
             array[j+1]=temp;
         }
     }
    }
    return array;
 }
 console.log(sortedArrayDsc(nums2));