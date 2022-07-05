//for task 1
{
    let block_1 = document.getElementsByClassName("b1");
    let block_2 = document.getElementsByClassName("b2");
    let block_3 = document.getElementsByClassName("b3");
    let block_4 = document.getElementsByClassName("b4");

    //events mousover for three blocks 
    block_1[0].addEventListener("mouseover", block_4_AnotherColor);
    block_2[0].addEventListener("mouseover", block_4_AnotherColor);
    block_3[0].addEventListener("mouseover", block_4_AnotherColor);

    //events mousout for three blocks
    block_1[0].addEventListener("mouseout", block_4_DefaultColor);
    block_2[0].addEventListener("mouseout", block_4_DefaultColor);
    block_3[0].addEventListener("mouseout", block_4_DefaultColor);

    //Functions 
    //function set block_4 defauil color
    function block_4_DefaultColor() {
        block_4[0].style.backgroundColor = 'grey';
    }
    //function set block 4 another color
    function block_4_AnotherColor(e) {
        block_4[0].style.backgroundColor =
            window.getComputedStyle(e.target).getPropertyValue('background-color');
    }
}


