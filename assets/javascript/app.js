$(document).ready(function() {

    document.getElementById("one").innerHTML = 100;
   $('#alert').hide();
  $('#newgame').hide();
   $('#question1').hide();
  
      document.getElementById("button").onclick = function fun() {
    
               $('#question1').show();
               var count = 100;
               var clock = setInterval(myTimer, 1000);

                    function myTimer(){
                  count -= 1;
                  if (count === 0){

                    $('#alert').show();
                    $('#newgame').show();
                    clearInterval(clock);
                  }

                document.getElementById('one').innerHTML = count;
                    };
        $(function() {
        $('#time-select').timepicker({ 
            'scrollDefault' : 'now',
            
            'step' : 15
        });
    });
    $('#myForm input').on('change', function() {
        alert($('input[name="myRadio"]:checked', '#myForm').val()); 
    });
 
      };
  
  document.getElementById("newgame").onclick = function newGame() {
     $('#alert').hide();
     $('#question1').hide();
     document.getElementById("one").innerHTML = 100;
     clearInterval(clock);
  }
  
  $('#myForm input').on('change', function() {
   alert($('input[name="myRadio"]:checked', '#myForm').val()); 
});
  
  
});

