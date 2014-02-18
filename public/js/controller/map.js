define([
    'jquery',
    'controller/marker',
    'can/control'
], function($, Marker)
{
    var Map = can.Control.extend('Bali.controller.Map',
    {
        defaults: {
            center: new google.maps.LatLng(-8.450038,115.0578441),
            zoom: 9
        }
    },
    {
        'init' : function(el, options)
        {
            var map     = new google.maps.Map(el[0], options);
            var marker  = new Marker({
                map: map,
                position: options.center,
                // icon: new google.maps.Icon({
                //  url: '/images/Amed/DSC06881.jpg',
                //  size: new google.maps.Size(60,60)
                // })
            });
        }
    });

    return Map;
});