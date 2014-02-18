define([
    'jquery',
    'controller/grid',
    'controller/slideshow',
    
    'can/control',
    'can/control/route',
    'can/route'
], function($, Grid, Slideshow)
{
    var App = can.Control.extend('Bali.App',
    {
        defaults: {
            grid: {
                main_page: [
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
            slideshow: {
                amed: {
                    slides: [
                        { src: 'images/Amed/DSC01393.JPG' },
                        { src: 'images/Amed/DSC01395.JPG' },
                        { src: 'images/Amed/DSC06845.JPG' },
                        { src: 'images/Amed/DSC06857.JPG' },
                        { src: 'images/Amed/DSC06865.JPG' },
                        { src: 'images/Amed/DSC06875.JPG' },
                        { src: 'images/Amed/DSC06881.JPG' }
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

            can.route.ready();
        },

        "route": function(data)
        {
            new Grid(this.element.find('#content'), {
                thumbnails: this.options.grid.main_page
            });
        },

        ':type/:id route': function(data) {
            if (data.type === 'slideshow') {
                new Slideshow(this.element.find('#content'), {
                    slides: this.options.slideshow[data.id].slides,
                    parent: this.options.slideshow[data.id].parent
                });
            }
        },
    });

    return App;
});