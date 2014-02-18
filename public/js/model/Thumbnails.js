define([
    'jquery',
    'can/map',
    'can/list'
], function($)
{
    var Thumbnails = can.Map.extend('Bali.model.Thumbnails',
    {

    },
    {
        src: '',
        link: ''
    });

    Thumbnails.List = can.List.extend('Bali.model.Thumbnails.List', {
        Map: Thumbnails
    },
    {

    });

    return Thumbnails;
});