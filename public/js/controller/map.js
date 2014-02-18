define([
    'jquery',
    'controller/marker',
    'text!../view/map.ejs',
    'can/control',
    'can/view/ejs'
], function($, Marker, mapEjs)
{
    can.view.ejs('map_ejs', mapEjs);

    var Map = can.Control.extend('Bali.controller.Map',
    {
        defaults: {
            zoom: 10
        }
    },
    {
        'init' : function(el, options)
        {
            this.vRender();
        },

        'vRender' : function()
        {
            this.element.html(can.view('map_ejs', {}));

            var self    = this;
            var zoom    = this.options.zoom;
            var center  = new google.maps.LatLng(this.options.lat,this.options.lon);
            
            var map     = new google.maps.Map(self.element.find('.map')[0], {
                center                  : center,
                mapTypeId               : google.maps.MapTypeId.SATELLITE,
                zoom                    : zoom
            });

            google.maps.event.addListener(map, 'click', function() {
                map.setZoom(zoom);
                map.panTo(center);
            });

            $.each(self.options.markers, function(iTmp, marker)
            {
                var marker = new Marker({
                    map: map,
                    position: new google.maps.LatLng(marker.lat,marker.lon),
                    title: 'Click to zoom'
                });

                google.maps.event.addListener(marker.marker, 'click', function() {
                    map.setZoom(14);
                    map.panTo(marker.marker.getPosition());
                });
            });
        },


        '{document} keyup': function(el, ev)
        {
            var key = ev.keyCode ? ev.keyCode : ev.which;
            switch(key) {
                case 27: 
                    location.hash = '#';
                    break;
            }
        },

        'button.remove click': function(el, ev)
        {
            location.hash = '#';
        }
    });

    return Map;
});