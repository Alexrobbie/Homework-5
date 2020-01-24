
function save() {
    for(i=1;i<=24;i++) {
        var text= $("#"+i).val();
        window.localStorage.setItem(i,text);
    }
}

function load() {
    for(i=1;i<=24;i++) {
      var loadText= window.localStorage.getItem(i);
        if (loadText !=null) {
            $("#"+i).val(loadText);
            
        }
    }
}
load();
$("#date").append(moment().format('MMMM Do YYYY'));

function time() {
    var t=parseInt(moment().format('HH'));
    console.log(t)
    for (j=1;j<=24;j++) {
        if(j<t) {
           $("#"+j).css( "background-color","rgba(128, 128, 128, 0.7)");
        }
        else if (j>t) {
           $("#"+j).css( "background-color","rgba(0, 128, 0, 0.7)");
        }
       else {
          $("#"+j).css( "background-color","rgba(255, 0, 0, 0.7)");
        }
        
    }
}

time();
