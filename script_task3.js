let block_1 = document.getElementsByClassName("b1");
let block_2 = document.getElementsByClassName("b2");
let block_3 = document.getElementsByClassName("b3");

//disabled contextmenu on body
document.body.addEventListener('contextmenu', e => e.preventDefault());

//event change blocks location
document.body.addEventListener('mousedown', changeBlocksLocation);

function changeBlocksLocation(e) {
    block_1[0].style.zIndex = 0;
    block_2[0].style.zIndex = 0;
    block_3[0].style.zIndex = 0;
    switch (e.which) {
        case 1:
            block_1[0].style.zIndex = 1;
            block_1[0].style.marginTop = (e.pageY - 32) + "px";
            block_1[0].style.marginLeft = (e.pageX - 8) + "px";
            break;
        case 2:
            block_2[0].style.zIndex = 1;
            block_2[0].style.marginTop = (e.pageY - 32) + "px";
            block_2[0].style.marginLeft = (e.pageX - 8) + "px";
            break;
        case 3:
            block_3[0].style.zIndex = 1;
            block_3[0].style.marginTop = (e.pageY - 32) + "px";
            block_3[0].style.marginLeft = (e.pageX - 8) + "px";
            break;
        default:
            alert("ERROR!!!\nNot knowing which mouse button was pressed");
            break;
    }
}


