let arr = [40,30,20,80 ,55,67,44,59,99,34,60,51,99,89,35];
let smallbutton = document.getElementById("small");
let mediumbutton = document.getElementById("medium");
let largebutton =document.getElementById("large");

smallbutton.addEventListener("click" , ()=> makeSmallArr(arr));
mediumbutton.addEventListener("click" ,()=>makeMediumArr(arr));
largebutton.addEventListener("click" ,()=>makeLargeArr(arr));

let parentDiv = document.getElementsByClassName('parentDiv');
let bubblebtn = document.getElementById('bubblebtn');

function visualBar(arr) {
    let i = 0;
    arr.forEach(e => {

        let innerDiv = document.createElement('div');
        innerDiv.style.height = (e * 6 + 'px');
        innerDiv.style.backgroundColor = '#' + ((1 << 24) * Math.random() | 1).toString(16);
        innerDiv.setAttribute('id', 'elem' + i);

        i++;
        const insertValue = document.createTextNode(e);
        innerDiv.appendChild(insertValue);
        parentDiv[0].appendChild(innerDiv)

    });
}


bubblebtn.addEventListener("click",  ()=> BubbleFunc(arr));
Insertionbtn.addEventListener("click",  ()=> InsertionFunc(arr));
Selectionbtn.addEventListener("click",  ()=> SelectionFunc(arr));

 const sleep = (time) => {
    return new Promise(resolve => setTimeout(resolve, time))
}


function  makeSmallArr(arr){
    for(let i  = 0 ; i < 10 ; i++){
        arr.shift();
      
    }
    console.log(arr);
    visualBar(arr);

  } 


function  makeMediumArr(arr){
    for(let i  = 0 ; i < 6 ; i++){
        arr.shift();
    }
    visualBar(arr);
  }

  function  makeLargeArr(arr){
    visualBar(arr);
  }



 async function BubbleFunc(arr){
       
       // let arr = [50,40,20,30,10,60,80,5 ];

        for(let i = 0 ; i < arr.length ;i++){

            for(let j  =0  ; j < (arr.length -i -1); j++){

                await sleep(200);
    
                if(arr[j] > arr[j+1]){
                    swapNumber(arr , j , j+1)
    
                    swapColorHeight(j , j+1)
                    
                }
            }
    
        }
        
} 
async function InsertionFunc(arr){
       
    // let arr = [50,40,20,30,10,60,80,5 ];

     for(let i = 1; i < arr.length ;i++){

       let current = arr[i] ;
       let j = i-1 ;

       while( j >= 0 && current < arr[j]){
       await sleep(800);
          swapNumber(arr , j ,j+1 );
          swapColorHeight(j, j+1 );
       
       
        j--;
       }
            
         }
 
     }
     

async function SelectionFunc(arr){
       
    // let arr = [50,40,20,30,10,60,80,5 ];

     for(let i = 0 ; i < arr.length -1  ;i++){
        let  smallest = i ;

         for(let j  = i+1  ; j < arr.length; j++){
            await sleep(200);

            if(arr[smallest] > arr[j]){
                smallest = j ;
            }         
             
         }
         swapNumber(arr , smallest , i );
 
         swapColorHeight(smallest , i );
 
     }
     
} 


function swapNumber(arr , j , i){
    let temp  = arr[j]
    arr[j] = arr[i]
    arr[i] =  temp 
}


function swapColorHeight(j , i){


let e1 = document.getElementById('elem'+j);
let e2 = document.getElementById('elem'+i);

let bg1 =e1.style.backgroundColor;
let bg2 = e2.style.backgroundColor;

e1.style.backgroundColor = bg2 ;
e2.style.backgroundColor = bg1 ;

let h1 = e1.style.height;
let h2 = e2.style.height;


e1.style.height = h2;
e2.style.height = h1 ;


let text1 = e1.textContent;
let text2 = e2.textContent;

e1.textContent = text2;
e2.textContent = text1;






}