// 메뉴 Nav에 클릭하면 선택메뉴에 선택된 메뉴 라인생성
let horizontalUnderline = document.getElementById("horizontal-underline");
let horizontalMenu = document.querySelectorAll("nav:first-child a");

horizontalMenu.forEach((menu) => 
    menu.addEventListener("click", (e) => horizontalIndicator(e)));

function horizontalIndicator(e)
{
    horizontalUnderline.style.left = e.currentTarget.offsetLeft + "px"
    horizontalUnderline.style.width = e.currentTarget.offsetWidth + "px"
    horizontalUnderline.style.top = e.currentTarget.offsetTop + e.currentTarget.offsetHeight +  "px"
}

// 왼쪽에서 오른쪽 슬라이드 애니메이션 구현
let mainText = document.querySelector("h1")
window.addEventListener('scroll', function()
{
    let value = this.window.scrollY;
    console.log("scrollY", value);

    if (value > 400){

        mainText.style.animation = "slide_back 2s ease-out forwards";
    }
    else{
        mainText.style.animation = 'slide 2s ease-out';
    }
})

// 오른쪽에서 왼쪽 슬라이드 애니메이션 구현
let mainText1 = document.querySelector("h3")
window.addEventListener('scroll', function()
{
    let value = this.window.scrollY;
    console.log("scrollY", value);

    if (value > 400){
        mainText1.style.animation = "slide_right_back 2s ease-out forwards";
    }
    else{
        mainText1.style.animation = 'slide_right 2s ease-out';
    }
})