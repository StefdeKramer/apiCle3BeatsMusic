/**
 * Created by Rik on 22-3-2016.
 */
$(init);

function init() {
    $.ajax({
        url: "laden.php",
        dataType:"JSON"
    }).success(func);
}
function func(){
    console.log('success')
}
