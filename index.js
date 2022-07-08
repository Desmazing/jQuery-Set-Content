$(document).ready(function(){
    $("#set").click(function(){
        $(".bold").html('<b>- This text has become bolder</b>');
        $(".text").text('- Hello, World!');
        $(".alert_value").val("How you doin!");
    })
})
$(document).ready(function(){
    $("#val").click(function(){
        alert($(".alert_value").val());
    })
})