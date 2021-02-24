class Kokinchan {
    private _BlueList = new Array<number>();
    private _WhiteList = new Array<number>();
    private _GreenList = new Array<number>();
    private _OrangeList = new Array<number>();
    private _RedList = new Array<number>();
    private _BlackList = new Array<number>();

    public Blue = "#0b9baf";
    public White = "#ffffff";
    public Green = "#3cb371";
    public Orange = "#ff7f50";
    public Red = "#da349c";
    public Black = "#000000";

    public initialize() {
        const bt = document.getElementById("StartButton");
        bt.addEventListener("click", this.StartButton_Click.bind(this));

        this.initializeBlueList();
        this.initializeWhiteList();
        this.initializeGreenList();
        this.initializeOrangeList();
        this.initializeRedList();
        this.initializeBlackList();

    }
    private initializeBlueList() {
        const l = this._BlueList;


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

    }
    private initializeWhiteList() {
        const l = this._WhiteList;
    }
    private initializeGreenList() {
        const l = this._GreenList;
    }
    private initializeOrangeList() {
        const l = this._OrangeList
    }
    private initializeRedList() {
        const l = this._RedList
    }
    private initializeBlackList() {
        const l = this._BlackList;
    }

    private StartButton_Click() {
        const div = document.getElementById("KokinchanPanel");

        this.Blue = (document.getElementById("BlueTextBox") as HTMLInputElement).value;
        this.White = (document.getElementById("WhiteTextBox") as HTMLInputElement).value;
        this.Green = (document.getElementById("RedTextBox") as HTMLInputElement).value;
        this.Orange = (document.getElementById("RedTextBox") as HTMLInputElement).value;
        this.Red = (document.getElementById("RedTextBox") as HTMLInputElement).value;
        this.Black = (document.getElementById("RedTextBox") as HTMLInputElement).value;

        div.innerHTML = "";
        for (var i = 0; i < 255; i++) {
            const span = document.createElement("span") as HTMLElement;
            span.classList.add("dot");
            span.innerText = div.children.length.toString();
            div.appendChild(span);
        }
        for (var i = 0; i < this._BlueList.length; i++) {
            var index = this._BlueList[i];
            var span = div.children[index] as HTMLElement;
            span.style["background-color"] = this.Blue;
        }
        for (var i = 0; i < this._WhiteList.length; i++) {
            var index = this._WhiteList[i];
            var span = div.children[index] as HTMLElement;
            span.style["background-color"] = this.White;
        }
        for (var i = 0; i < this._RedList.length; i++) {
            var index = this._RedList[i];
            var span = div.children[index] as HTMLElement;
            span.style["background-color"] = this.Red;
        }
    }
}


document.addEventListener("DOMContentLoaded", function () {
    const page = new Kokinchan();
    page.initialize();
});