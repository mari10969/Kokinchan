var Kokinchan5 = /** @class */ (function () {
    function Kokinchan5() {
        this._BlueList = new Array();
        this._WhiteList = new Array();
        this._GreenList = new Array();
        this._OrangeList = new Array();
        this._RedList = new Array();
        this._BlackList = new Array();
        this.Blue = "#0b9baf";
        this.White = "#ffffff";
        this.Green = "#3cb371";
        this.Orange = "#ff7f50";
        this.Red = "#da349c";
        this.Black = "#000000";
    }
    Kokinchan5.prototype.initialize = function () {
        var bt = document.getElementById("StartButton");
        bt.addEventListener("click", this.StartButton_Click.bind(this));
        this.initializeBlueList();
        this.initializeWhiteList();
        this.initializeGreenList();
        this.initializeOrangeList();
        this.initializeRedList();
        this.initializeBlackList();
    };
    Kokinchan5.prototype.initializeBlueList = function () {
        var l = this._BlueList;
        //5
        //for (var i = 65; i < 70; i++) {
        // l.push(i);
        // }
        //9
        //for (var i = 78; i < 87; i++) {
        // l.push(i);
        // }
        //11
        //for (var i = 92; i < 92 + 11; i++) {
        // l.push(i);
        //}
        //13
        // for (var i = 106; i < 106 + 13; i++) {
        // l.push(i);
        // }
        //横幅全部
        //for (var i = 120; i < 195; i++) {
        //  l.push(i);
        //}
        //13
        //for (var i = 196; i < 196 + 13; i++) {
        // l.push(i);
        //}
        //9
        //for (var i = 213; i < 213 + 9; i++) {
        //l.push(i);
        // }
        //for (var i = 0; i < l.length; i++) {
        // l[i] = l[i] + 15;
        //}
    };
    Kokinchan5.prototype.initializeWhiteList = function () {
        var l = this._WhiteList;
    };
    Kokinchan5.prototype.initializeGreenList = function () {
        var l = this._GreenList;
    };
    Kokinchan5.prototype.initializeOrangeList = function () {
        var l = this._OrangeList;
    };
    Kokinchan5.prototype.initializeRedList = function () {
        var l = this._RedList;
    };
    Kokinchan5.prototype.initializeBlackList = function () {
        var l = this._BlackList;
    };
    Kokinchan5.prototype.StartButton_Click = function () {
        var div = document.getElementById("Kokinchan5Panel");
        this.Blue = document.getElementById("BlueTextBox").value;
        this.White = document.getElementById("WhiteTextBox").value;
        this.Green = document.getElementById("RedTextBox").value;
        this.Orange = document.getElementById("RedTextBox").value;
        this.Red = document.getElementById("RedTextBox").value;
        this.Black = document.getElementById("RedTextBox").value;
        div.innerHTML = "";
        for (var i = 0; i < 255; i++) {
            var span_1 = document.createElement("span");
            span_1.classList.add("dot");
            span_1.innerText = div.children.length.toString();
            div.appendChild(span_1);
        }
        for (var i = 0; i < this._BlueList.length; i++) {
            var index = this._BlueList[i];
            var span = div.children[index];
            span.style["background-color"] = this.Blue;
        }
        for (var i = 0; i < this._WhiteList.length; i++) {
            var index = this._WhiteList[i];
            var span = div.children[index];
            span.style["background-color"] = this.White;
        }
        for (var i = 0; i < this._RedList.length; i++) {
            var index = this._RedList[i];
            var span = div.children[index];
            span.style["background-color"] = this.Red;
        }
    };
    return Kokinchan5;
}());
document.addEventListener("DOMContentLoaded", function () {
    var page = new Kokinchan5();
    page.initialize();
});
//# sourceMappingURL=Kokinchan5.js.map