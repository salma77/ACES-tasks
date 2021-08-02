import React from "react";

function isColor(strColor){
    var s = new Option().style;
    s.color = strColor;
    return s.color == strColor || /^#[0-9A-F]{6}$/i.test(strColor);
}

export default isColor