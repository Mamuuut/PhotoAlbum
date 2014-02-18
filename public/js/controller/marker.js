define([
    'jquery',
    'can/construct'
], function($)
{
    var Marker = can.Construct.extend('Bali.controller.Marker',
    {

    },
    {
        'setup' : function(options)
        {
            this.marker = new google.maps.Marker(options);
        }
    });

    return Marker;
});