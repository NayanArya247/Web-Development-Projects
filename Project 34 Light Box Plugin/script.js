/* Plugin Name: TechGun LightBox
   Plugin Version: 1.0.0
   Plugin Author : vishwajeet
   about Plugin........*/




//function to include html popup code

function includePopupHtml(){
    let html = '<div id="vis-popup"><span id="close" onclick = "closePopUp()"><img id="npop" src="img/close.png" alt=""></span><img id="leftarrow" src="img/left.png" alt=""><img id="rightarrow" src="img/right.png" alt=""><img id="mainPopImage" src="img/1.jpg" alt=""></div>';

    let popdiv = document.createElement("div");
    popdiv.innerHTML = html;
    document.body.insertBefore(popdiv, document.body.firstChild)
}

let img;
let current;

//function to init plugin
function imagePopupInit(target){

    //select all images with class target
    img = document.getElementsByClassName(target);
    
    //add event listener on all selected images
    for(var i = 0; i < img.length; i++){
        // add pointer
        img[i].style.cursor = 'pointer';

        //add event listerner
        img[i].addEventListener("click", function(){
            document.getElementById("mainPopImage").src = this.src;
            document.getElementById("vis-popup").style.display = 'block';
            checkArrow()
        })
    }
    includePopupHtml()

    //next button
    document.getElementById("rightarrow").addEventListener('click', function(){
        nextimg()
    })
    //prev button
    document.getElementById("leftarrow").addEventListener('click', function(){
        previmg()
    })
}

//close button

function closePopUp(){
    document.getElementById("mainPopImage").src = "";
    document.getElementById("vis-popup").style.display = 'none';
}

//next image
function nextimg(){
    getCurrentImage()
    current++;
    document.getElementById("mainPopImage").src = img[current].src;
    checkArrow()
}

//prev image
function previmg(){
    getCurrentImage()
    current--;
    document.getElementById("mainPopImage").src = img[current].src;
    checkArrow()
}

//current image poistion 
function getCurrentImage(){
    for(var i = 0; i < img.length; i++){
        if(img[i].src == document.getElementById("mainPopImage").src){
            current = i;
        }
    }
}

function checkArrow(){
    getCurrentImage();
    if(current == "0"){
        document.getElementById('leftarrow').style.display = 'none';
        document.getElementById('rightarrow').style.display = 'block';
    }else if(current == img.length - 1){
        document.getElementById('leftarrow').style.display = 'block';
        document.getElementById('rightarrow').style.display = 'none';
    }else{
        document.getElementById('rightarrow').style.display = 'block';
        document.getElementById('leftarrow').style.display = 'block';
    }

}

