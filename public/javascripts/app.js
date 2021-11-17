$(function(){

    $("#fetchdata").on('click', function(){
        $.get( "/fetchdata", function( data ) {
            var trades = data['data'];
            $("#trdata").html('');
            $("#message").hide();
            var string = '';
            $.each(trades, function(index, trade ) {

                string += '<tr><td>'+(index+1)+'</td><td>'+trade['soldOrBought']+'</td><td>'+trade['C3']+'</td><td>'+trade['Symbol_of_contract']+'</td><td>'+trade['C4']+'</td><td>'+trade['Quantity']+'</td></tr>';
            });

            $("#trdata").html(string);
        });
    });

    $("#importdata").on('click', function(){
        $.get( "/import", function( data ) {
            $("#message").show().html(data['success']);
        });
    });

});
