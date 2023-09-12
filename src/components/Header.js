"use strict";
exports.__esModule = true;
var react_1 = require("react");
var headerVideo_mp4_1 = require("../assets/headerVideo.mp4");
require("../styles/header.css");
var Header = function () {
    var _a = react_1.useState(false), isMobileView = _a[0], setIsMobileView = _a[1];
    react_1.useEffect(function () {
        if (window.innerWidth < 480) {
            setIsMobileView(true);
        }
    }, []);
    console.log(isMobileView);
    return (react_1["default"].createElement("div", { className: 'header' },
        react_1["default"].createElement("div", { className: 'video-wrapper' },
            react_1["default"].createElement("video", { playsInline: true, autoPlay: true, loop: true, muted: true, id: 'video', className: 'headerVideo' },
                react_1["default"].createElement("source", { src: headerVideo_mp4_1["default"], type: 'video/mp4' }))),
        isMobileView === false ? (react_1["default"].createElement("div", { className: 'svg-wrapper' },
            react_1["default"].createElement("svg", { viewBox: '0  0 25 10' },
                react_1["default"].createElement("defs", null,
                    react_1["default"].createElement("style", { type: 'text/css' }, "@import url('https://fonts.googleapis.com/css2?family=Krona+One&family=Lalezar&family=Outfit:wght@300;400;500;600;700;800;900&display=swap');"),
                    react_1["default"].createElement("mask", { id: 'mask', width: '100', height: '10' },
                        react_1["default"].createElement("rect", { width: '25', height: '10', fill: '#fff' }),
                        react_1["default"].createElement("text", { "text-anchor": 'middle', x: '14', y: '7', dy: '0', fontFamily: 'Lalezar', fontSize: 7 }, "MUSIC"))),
                react_1["default"].createElement("rect", { width: '100', height: '30', mask: 'url(#mask)', "fill-opacity": '1' })),
            react_1["default"].createElement("svg", { viewBox: '0  0 25 10' },
                react_1["default"].createElement("defs", null,
                    react_1["default"].createElement("style", { type: 'text/css' }, "@import url('https://fonts.googleapis.com/css2?family=Krona+One&family=Lalezar&family=Outfit:wght@300;400;500;600;700;800;900&display=swap');"),
                    react_1["default"].createElement("mask", { id: 'maskTwo', width: '100', height: '10' },
                        react_1["default"].createElement("rect", { width: '25', height: '10', fill: '#fff' }),
                        react_1["default"].createElement("text", { "text-anchor": 'middle', x: '12', y: '7', dy: '0', fontFamily: 'Lalezar', fontSize: 7 }, "TOUR"))),
                react_1["default"].createElement("rect", { width: '100', height: '30', mask: 'url(#maskTwo)', "fill-opacity": '1' })),
            react_1["default"].createElement("svg", { viewBox: '0  0 25 10' },
                react_1["default"].createElement("defs", null,
                    react_1["default"].createElement("style", { type: 'text/css' }, "@import url('https://fonts.googleapis.com/css2?family=Krona+One&family=Lalezar&family=Outfit:wght@300;400;500;600;700;800;900&display=swap');"),
                    react_1["default"].createElement("mask", { id: 'maskFour', width: '100', height: '10' },
                        react_1["default"].createElement("rect", { width: '25', height: '10', fill: '#fff' }),
                        react_1["default"].createElement("text", { "text-anchor": 'middle', x: '11', y: '7', dy: '0', fontFamily: 'Lalezar', fontSize: 7 }, "MERCH"))),
                react_1["default"].createElement("a", { href: 'https://github.com/TorunW/Juedische-Stimme' },
                    react_1["default"].createElement("rect", { width: '100', height: '30', mask: 'url(#maskFour)', "fill-opacity": '1' }))),
            react_1["default"].createElement("svg", { viewBox: '0  0 25 10' },
                react_1["default"].createElement("defs", null,
                    react_1["default"].createElement("style", { type: 'text/css' }, "@import url('https://fonts.googleapis.com/css2?family=Krona+One&family=Lalezar&family=Outfit:wght@300;400;500;600;700;800;900&display=swap');"),
                    react_1["default"].createElement("mask", { id: 'maskThree', width: '100', height: '10' },
                        react_1["default"].createElement("rect", { width: '25', height: '10', fill: '#fff' }),
                        react_1["default"].createElement("text", { "text-anchor": 'middle', x: '10', y: '7', dy: '0', fontFamily: 'Lalezar', fontSize: 7 }, "GAME"))),
                react_1["default"].createElement("rect", { width: '100', height: '30', mask: 'url(#maskThree)', "fill-opacity": '1' })))) : (react_1["default"].createElement("svg", { viewBox: '0 0 100 30' },
            react_1["default"].createElement("defs", null,
                react_1["default"].createElement("style", { type: 'text/css' }, "@import url('https://fonts.googleapis.com/css2?family=Krona+One&family=Lalezar&family=Outfit:wght@300;400;500;600;700;800;900&display=swap');"),
                react_1["default"].createElement("mask", { id: 'mask', x: '0', y: '0', width: '100', height: '30' },
                    react_1["default"].createElement("rect", { x: '0', y: '6', width: '100', height: '20', fill: '#fff' }),
                    react_1["default"].createElement("text", { "text-anchor": 'middle', x: '38', y: '18', dy: '1', fontFamily: 'Lalezar', fontSize: 7 }, "TOUR"),
                    react_1["default"].createElement("text", { "text-anchor": 'middle', x: '62', y: '18', dy: '1', fontFamily: 'Lalezar', fontSize: 7 }, "MERCH"),
                    react_1["default"].createElement("text", { "text-anchor": 'middle', x: '85', y: '18', dy: '1', fontFamily: 'Lalezar', fontSize: 7 }, "GAME"))),
            react_1["default"].createElement("rect", { x: '0', y: '0', width: '100', height: '30', mask: 'url(#mask)', "fill-opacity": '1' })))));
};
exports["default"] = Header;
