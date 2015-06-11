
$(document).ready(function(){

    for(i=0; i<10; i++){

        console.log('adding listener to ', '#a0' + i, ' fade target is ', '#b0' + i);
        $("#a0" + i).click(function (e) {

            e.preventDefault();

            console.log('#b0' + i + 'is fading')
            $('#b0' + i).fadeToggle('');
        });
    }
});
