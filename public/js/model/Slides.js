define([
    'jquery',
    'can/map',
    'can/list'
], function($)
{
    var Slides = can.Map.extend('Bali.model.Slides',
    {

    },
    {
        src: ''
    });

    Slides.List = can.List.extend('Bali.model.Slides.List', {
        Map: Slides
    },
    {

    });

    return Slides;
});