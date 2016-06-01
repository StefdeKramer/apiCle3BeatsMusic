/**
 * Created by Stef on 2016-03-29.
 */
window.addEventListener('load', init);
var title;
var subtitle;
var text;
var color;


function init() {
    var button = document.getElementById('button1');
    button.addEventListener('click', btnClickHandler);
}

function btnClickHandler(e) {
    //document.getElementById("demo").innerHTML = self.location = 'wandelen.html';
    console.log("Button has been successfully clicked!");

    var btn = e.target.id;
    console.log(btn);

    switch(btn)
    {
        case "button1":
            title = "Hallo";
            subtitle = "Stef?";
            text = "HalloHalloHalloHalloHalloHalloHalloHalloHallo";
            color = "yellow";
            break;
        case "button2":
            title = "Hallo";
            subtitle = "Stef?";
            text = "HalloHalloHalloHalloHalloHalloHalloHalloHallo";
            color = "yellow";
            break;
        case "button3":
            break;
        case "button4":
            break;

    }

    changeIndex(title, subtitle, text, color);
}

function changeIndex(title, subtitle, text, color) {
    console.log("We have reached changeIndex");

    var titleID = document.getElementById("mainTitle");
    var subTitleID = document.getElementById("subTitle");
    var textID = document.getElementById("mainText");
    var main = document.getElementById("main");

    titleID.innerHTML = title;
    subTitleID.innerHTML = subtitle;
    textID.innerHTML = text;
    main.style.backgroundColor = color;
    document.body.style.backgroundColor = color;


}