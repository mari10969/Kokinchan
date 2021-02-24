var Canvas = /** @class */ (function () {
    function Canvas() {
        this._panel = document.getElementById("Canvas");
    }
    Canvas.prototype.initialize = function () {
        document.getElementById("KokinchanButton").addEventListener("click", this.KokinchanButton_Click.bind(this));
        var div = this._panel;
        div.innerHTML = "";
        for (var i = 0; i < 256; i++) {
            var span = document.createElement("span");
            span.classList.add("dot");
            //span.innerText = div.children.length.toString();
            div.appendChild(span);
        }
    };
    Canvas.prototype.KokinchanButton_Click = function () {
        var kokinchan = new Kokinchan();
        this.Draw(kokinchan.getColorList());
    };
    Canvas.prototype.Draw = function (colorList) {
        var div = this._panel;
        for (var i = 0; i < colorList.length; i++) {
            var colorData = colorList[i];
            var span = div.children[colorData.index];
            span.style["background-color"] = colorData.color;
        }
    };
    return Canvas;
}());
var Kokinchan = /** @class */ (function () {
    function Kokinchan() {
        this._ColorList = new Array();
        this.FaceColor = "#1e90ff";
        this.BackgroundColor = "#ffffff";
        this.EyesColor = "#32cd32";
        this.NoseColor = "#ff6347";
        this.RibbonColor = "#ff0000";
        this.OutlineColor = "#000000";
        this.CheekColor = "#dda0dd";
    }
    Kokinchan.prototype.loadData = function () {
        this._ColorList = new Array();
        this.setColorList(this.getFaceColorList(), this.FaceColor);
        this.setColorList(this.getBackgroundColorList(), this.BackgroundColor);
        this.setColorList(this.getEyesColorList(), this.EyesColor);
        this.setColorList(this.getNoseColorList(), this.NoseColor);
        this.setColorList(this.getRibbonColorList(), this.RibbonColor);
        this.setColorList(this.getOutlineColorList(), this.OutlineColor);
        this.setColorList(this.getCheekColorList(), this.CheekColor);
    };
    Kokinchan.prototype.getFaceColorList = function () {
        var l = new Array();
        l.push(98);
        l.push(114);
        l.push(130);
        l.push(146);
        l.push(162);
        l.push(178);
        l.push(110);
        l.push(126);
        l.push(142);
        l.push(158);
        l.push(174);
        l.push(190);
        l.push(83);
        l.push(93);
        l.push(24);
        for (var i = 68; i < 68 + 9; i++) {
            l.push(i);
        }
        for (var i = 85; i < 85 + 7; i++) {
            l.push(i);
        }
        for (var i = 102; i < 102 + 5; i++) {
            l.push(i);
        }
        for (var i = 119; i < 119 + 2; i++) {
            l.push(i);
        }
        return l;
    };
    Kokinchan.prototype.getBackgroundColorList = function () {
        var l = new Array();
        return l;
    };
    Kokinchan.prototype.getEyesColorList = function () {
        var l = new Array();
        l.push(132);
        l.push(133);
        l.push(148);
        l.push(149);
        l.push(139);
        l.push(140);
        l.push(155);
        l.push(156);
        return l;
    };
    Kokinchan.prototype.getNoseColorList = function () {
        var l = new Array();
        l.push(167);
        return l;
    };
    Kokinchan.prototype.getRibbonColorList = function () {
        var l = new Array();
        l.push(23);
        l.push(25);
        l.push(55);
        l.push(57);
        for (var i = 39; i < 39 + 3; i++) {
            l.push(i);
        }
        return l;
    };
    Kokinchan.prototype.getOutlineColorList = function () {
        var l = new Array();
        l.push(8);
        l.push(56);
        l.push(52);
        l.push(53);
        l.push(54);
        l.push(58);
        l.push(59);
        l.push(60);
        l.push(77);
        l.push(94);
        l.push(111);
        l.push(127);
        l.push(143);
        l.push(159);
        l.push(175);
        l.push(191);
        l.push(206);
        l.push(221);
        l.push(67);
        l.push(82);
        l.push(97);
        l.push(113);
        l.push(129);
        l.push(145);
        l.push(161);
        l.push(177);
        l.push(194);
        l.push(211);
        l.push(181);
        l.push(187);
        l.push(115);
        l.push(125);
        for (var i = 228; i < 228 + 9; i++) {
            l.push(i);
        }
        for (var i = 198; i < 198 + 5; i++) {
            l.push(i);
        }
        return l;
    };
    Kokinchan.prototype.getCheekColorList = function () {
        var l = new Array();
        l.push(163);
        l.push(173);
        return l;
    };
    Kokinchan.prototype.setColorList = function (indexList, color) {
        for (var i = 0; i < indexList.length; i++) {
            var colorData = new ColorData();
            colorData.index = indexList[i];
            colorData.color = color;
            this._ColorList.push(colorData);
        }
    };
    Kokinchan.prototype.getColorList = function () {
        this.loadData();
        return this._ColorList;
    };
    return Kokinchan;
}());
var ColorData = /** @class */ (function () {
    function ColorData() {
    }
    return ColorData;
}());
document.addEventListener("DOMContentLoaded", function () {
    var page = new Canvas();
    page.initialize();
});
//# sourceMappingURL=Kokinchan.js.map