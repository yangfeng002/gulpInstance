/*!
 * MGUI: Generated from less code - v1.0 - 2018-09-29
 * 
 * GitHub: https://github.com/yangfeng002/module-MGUI.git 
 * Copyright (c) 2018 fy; Licensed MIT
 */

(function($) {
    'use strict';
    var nextColorIndex = 0;
    var presetColors = ['primary', 'red', 'yellow', 'green', 'blue', 'purple', 'brown', 'dark'];

    var colorset = {
        primary: '#48a3fc',
        secondary: '#177de1',
        pale: '#ebf2f9',
        fore: '#353535',
        back: '#fff',
        grayDarker: '#222222',
        grayDark: '#333333',
        gray: '#808080',
        grayLight: '#dddddd',
        grayLighter: '#e5e5e5',
        grayPale: '#f1f1f1',
        white: '#fff',
        black: '#000',
        red: '#ea644a',
        yellow: '#FFCC66',
        green: '#38b03f',
        blue: '#03b8cf',
        purple: '#8666b8',
        brown: '#bd7b46',
        greenPale: '#ddf4df',
        yellowPale: '#e8e8dc',
        redPale: '#ffe5e0',
        bluePale: '#ddf3f5',
        brownPale: '#f7ebe1',
        purplePale: '#f5eeff',
        light: '#fff',
        dark: '#353535',
        success: '#38b03f',
        warning: '#FFCC66',
        danger: '#ea644a',
        info: '#03b8cf',
        important: '#bd7b46',
        special: '#8666b8',
        successPale: '#ddf4df',
        warningPale: '#e8e8dc',
        dangerPale: '#ffe5e0',
        infoPale: '#ddf3f5',
        importantPale: '#f7ebe1',
        specialPale: '#f5eeff'
    };
    
    colorset.get = function(colorName) {
        if(typeof colorName === 'undefined' || colorName === 'random') {
            colorName = presetColors[(nextColorIndex++) % presetColors.length];
        }
        var color = colorset[colorName] ? colorset[colorName] : colorName;
        return $.mgui.Color ? new $.mgui.Color(color) : color;
    }

    $.mgui({colorset: colorset});
    if($.mgui.Color) $.extend($.mgui.Color, colorset);
}(jQuery));
