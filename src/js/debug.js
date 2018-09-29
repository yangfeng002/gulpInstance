/* ========================================================================
 * MGUI: debug.js
 * ========================================================================
 * Copyright (c) 2014-2016 cnezsoft.com; Licensed MIT
 * ======================================================================== */

(function($, window, document) {
    'use strict';
    $(function() {
        $('body').append('<style>#mguiDebug{display:none; position: fixed;left: 2%;top: 30%;}#mguiDebug .icon{width: 180px;height: 180px;padding: 20px;border-radius: 100px;background-color: #333;color: #fff;transition:all 0.4s;}#mguiDebug .icon.visible-xs{background-color: #39B3D7;}#mguiDebug .icon.visible-sm{background-color: #47A447;}#mguiDebug .icon.visible-md{background-color: #ED9C28;}#mguiDebug .icon.visible-lg{background-color: #D2322D;}#mguiDebug .icon:hover{opacity: 0.01;}#mguiDebug .icon > i{display: block;font-size: 60px;}#mguiDebug .icon small{display: inline-block;height: 24px;opacity: 0.7;font-size: 12px;background-color: rgba(0,0,0,0.5);border-radius:12px; line-height: 24px;margin-top: 10px;padding: 0 10px;}</style><div id="mguiDebug"><div class="icon text-center visible-xs"><i class="icon-mobile-phone"></i><strong>Phone</strong><div class="text-center"><small>XS <span class="screen-size"></span></small></div></div><div class="icon text-center visible-sm"><i class="icon-tablet"></i><strong>Tablet</strong><div class="text-center"><small>SM <span class="screen-size"></span></small></div></div><div class="icon text-center visible-md"><i class="icon-desktop"></i><strong>Desktop</strong><div class="text-center"><small>MD <span class="screen-size"></span></small></div></div><div class="icon text-center visible-lg"><i class="icon-desktop"></i><strong>Widescreen</strong><div class="text-center"><small>LG <span class="screen-size"></span></small></div></div></div>');
        displayScreenSize();
        $('#mguiDebug').fadeIn();
        $(window).resize(displayScreenSize);

        function displayScreenSize() {
            $('#mguiDebug .screen-size').text($(document).width() + ' x ' + $(document).height());
        }
    });
}(jQuery, window, document));

