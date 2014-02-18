define([
    'jquery',
    'controller/grid',
    'controller/map',
    'controller/slideshow',
    
    'can/control',
    'can/control/route',
    'can/route'
], function($, Grid, Map, Slideshow)
{
    var App = can.Control.extend('Bali.App',
    {
        defaults: {
            grid: {
                main_page: [
                    {
                        src: 'images/map.jpg',
                        ref: '#map'
                    },
                    {
                        src: 'images/ubud.jpg',
                        ref: '#slideshow/ubud'
                    },
                    {
                        src: 'images/amed.jpg',
                        ref: '#slideshow/amed'
                    },
                    {
                        src: 'images/culture.jpg',
                        ref: '#slideshow/culture'
                    }
                ]
            },
            map: {
                lat: -8.5499742,
                lon: 115.0659965,
                markers: [
                    {
                        lat: -8.3551773,
                        lon: 115.7015375
                    },
                    {
                        lat: -8.7497801,
                        lon: 115.1692478
                    },
                    {
                        lat: -8.8070487,
                        lon: 115.1122973
                    },
                    {
                        lat: -8.2522431,
                        lon: 115.3998748
                    },
                    {
                        lat: -8.5045622,
                        lon: 115.264365
                    }
                ]
            },
            slideshow: {
                amed: {
                    slides: [
                        { src: 'images/Amed/01.JPG' },
                        { src: 'images/Amed/02.JPG' },
                        { src: 'images/Amed/03.JPG' },
                        { src: 'images/Amed/04.JPG' },
                        { src: 'images/Amed/05.JPG' },
                        { src: 'images/Amed/06.JPG' },
                        { src: 'images/Amed/07.JPG' },
                        { src: 'images/Amed/08.JPG' }
                    ],
                    parent: '#'
                },
                ubud: {
                    slides: [
                        { src: 'images/Ubud/rice_01.JPG' },
                        { src: 'images/Ubud/rice_02.JPG' },
                        { src: 'images/Ubud/rice_03.JPG' },
                        { src: 'images/Ubud/rice_04.JPG' },
                        { src: 'images/Ubud/rice_05.JPG' },
                        { src: 'images/Ubud/rice_06.JPG' },
                        { src: 'images/Ubud/tree_01.JPG' },
                        { src: 'images/Ubud/tree_02.JPG' },
                        { src: 'images/Ubud/tree_03.JPG' },
                        { src: 'images/Ubud/plantation_01.JPG' },
                        { src: 'images/Ubud/plantation_02.JPG' },
                        { src: 'images/Ubud/plantation_03.JPG' },
                        { src: 'images/Ubud/plantation_04.JPG' },
                        { src: 'images/Ubud/plantation_05.JPG' },
                        { src: 'images/Ubud/plantation_06.JPG' },
                        { src: 'images/Ubud/plantation_07.JPG' },
                        { src: 'images/Ubud/plantation_08.JPG' },
                        { src: 'images/Ubud/plantation_09.JPG' }
                    ],
                    parent: '#'
                },
                culture: {
                    slides: [
                        { src: 'images/Culture/temple_01.JPG' },
                        { src: 'images/Culture/temple_02.JPG' },
                        { src: 'images/Culture/temple_03.JPG' },
                        { src: 'images/Culture/temple_04.JPG' },
                        { src: 'images/Culture/temple_05.JPG' },
                        { src: 'images/Culture/temple_06.JPG' },
                        { src: 'images/Culture/temple_07.JPG' },
                        { src: 'images/Culture/temple_08.JPG' },
                        { src: 'images/Culture/temple_09.JPG' },
                        { src: 'images/Culture/temple_10.JPG' },
                        { src: 'images/Culture/temple_11.JPG' },
                        { src: 'images/Culture/temple_12.JPG' },
                        { src: 'images/Culture/temple_13.JPG' },
                        { src: 'images/Culture/names.jpg' },
                        { src: 'images/Culture/food_01.JPG' },
                        { src: 'images/Culture/food_02.JPG' },
                        { src: 'images/Culture/food_03.JPG' },
                        { src: 'images/Culture/food_04.JPG' },
                        { src: 'images/Culture/food_05.JPG' },
                        { src: 'images/Culture/food_06.JPG' },
                        { src: 'images/the_end.jpg' }
                    ],
                    parent: '#'
                }
            }
        }
    },
    {
        'init' : function(el, options)
        {
            can.route(':type/:id');
            can.route(':type');

            can.route.ready();
        },

        "route": function(data)
        {
            new Grid(this.element.find('#content'), {
                thumbnails: this.options.grid.main_page
            });
        },

        ':type/:id route': function(data) {
            switch (data.type) {
                case 'slideshow':
                    new Slideshow(this.element.find('#content'), {
                        slides: this.options.slideshow[data.id].slides,
                        parent: this.options.slideshow[data.id].parent
                    });
                    break;
            }
        },

        ':type route': function(data) {
            switch (data.type) {
                case 'map':
                    new Map(this.element.find('#content'), this.options.map);
                    break;
            }
        },
    });

    return App;
});