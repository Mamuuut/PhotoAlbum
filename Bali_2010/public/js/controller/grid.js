define([
    'jquery',
    'model/Thumbnails',
    'text!../view/grid.ejs',
    'can/control',
    'can/view/ejs'
], function($, Thumbnails, gridEjs)
{

    can.view.ejs('grid_ejs', gridEjs);

    var Grid = can.Control.extend('Bali.controller.Grid',
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
            this.element.html(can.view('grid_ejs', {
                thumbnails: this.thumbnails
            }))
        }
    });

    return Grid;
});