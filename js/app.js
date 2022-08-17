// date for title 

$(document).ready(function(){
    $("#date").html(moment().format("MMMM, Do ,YYYY"));
});

// Object
var now = new Date();
// now.setHours("")
// var for now time 
var hour = now.getHours();

$(".event").each(function(){
    // checking for past 
    if(hour > $(this).data("time"))
    {
        $(this).attr("class", "past");

    }

    if(hour === $(this).data("time"))
    {
    $(this).attr("class", "present");
}
if(hour < $(this).data("time"))
{
    $(this).attr("class", "future");
}
    
})




$(".saveBtn").click(function(e){
    var textarea = e.target.parentElement.parentElement.querySelector("textarea");
    var key = textarea.getAttribute("data-time");
    var value = textarea.value;
})


