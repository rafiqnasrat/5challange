$(document).ready(function(){

    // SET DATE
    $("#date").html(moment().format("dddd, MMMM, Do"));


    // DECLARING VARAIBLES
    let now = new Date();
    
    var hour = now.getHours();

    



       $(".event").each(function(){

            // CHECKING FOR PAST
           if(hour > $(this).data("time"))
           {
                $(this).attr("class", "past"); //setAttribute("class", "value")
           }

            // CHECKING FOR PRESENT
            if(hour == $(this).data("time"))
            {
                $(this).attr("class", "present");
            }

            // CHECKING FOR FUTURE
            if(hour < $(this).data("time"))
            {
                $(this).attr("class", "future");
            }



            // RETRIVING DATA FROM LOCAL STORAGE
            var eventHour = $(this).data("time");

            for(var i=0; i<localStorage.length; i++)
            {
                var localStorageKey = localStorage.key(i);
                if(eventHour == localStorageKey)
                {
                    $(this).val(localStorage.getItem(localStorageKey));
                }
            }


       });



    //STORING EVETNS
    $(".saveBtn").click(function(e){



        var textarea = e.target.parentElement.parentElement.querySelector("textarea");
        var key = textarea.getAttribute("data-time");
        var value = textarea.value;


        window.localStorage.setItem("date", moment().format("MM DD YYYY"));
        window.localStorage.setItem(key, value);

    });







    // CLEAR STORAGE WHEN DATE CHANGED
    if(moment().format("MM DD YYYY") > window.localStorage.getItem("date"))
    {
        window.localStorage.clear();
    }


});





