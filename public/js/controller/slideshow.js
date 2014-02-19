define([
    'jquery',
    'model/Slides',
    'text!../view/slideshow.ejs',

    'bootstrap',
    'can/control',
    'can/view/ejs'
], function($, Slides, slideshowEjs)
{

    can.view.ejs('slideshow_ejs', slideshowEjs);

    var Slideshow = can.Control.extend('Bali.controller.Slideshow',
    {
        defaults: {
            slides: [],
            parent: undefined
        }
    },
    {
        'init' : function()
        {
            this.slides = new Slides.List(this.options.slides);
            this.vRender();
        },

        'vRender' : function()
        {
            this.element.html(can.view('slideshow_ejs', {
                slides: this.slides
            }));
            $('.carousel').carousel({
                interval: false,
                wrap: false
            });
        },

        '.carousel-control.left click': function()
        {
            $('.carousel').carousel('prev');
        },

        '.carousel-control.right click': function()
        {
            $('.carousel').carousel('next');
        },

        '{document} keyup': function(el, ev)
        {
            var key = ev.keyCode ? ev.keyCode : ev.which;
            switch(key) {
                case 39:
                    $('.carousel').carousel('next');
                    break;
                case 37:
                    $('.carousel').carousel('prev');
                    break;
                case 27:
                    location.hash = this.options.parent;
                    break;
            }
        }
    });

    return Slideshow;
});