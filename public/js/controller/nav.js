define([
    'jquery',
    'model/Thumbnails',
    'text!../view/nav.ejs',
    'can/control',
    'can/view/ejs'
], function($, Thumbnails, navEjs)
{

    can.view.ejs('nav_ejs', navEjs);

    var Nav = can.Control.extend('Bali.controller.Nav',
    {
        defaults: {
            thumbnails: []
        }
    },
    {
        'init' : function()
        {
            this.thumbnails = new Thumbnails.List(this.options.thumbnails);
            this.vRender();
        },

        'vRender' : function()
        {
            this.element.html(can.view('nav_ejs', {
                thumbnails: this.thumbnails
            }));
        },

        'vShow' : function()
        {
            this.element.children().show();
        },

        'vHide' : function()
        {
            this.element.children().hide();
        },

        'button.remove click': function(el, ev)
        {
            location.hash = '#';
        }
    });

    return Nav;
});