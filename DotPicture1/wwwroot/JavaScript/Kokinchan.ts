class Canvas {
    private _panel = document.getElementById("Canvas") as HTMLElement;

    public initialize() {
        document.getElementById("KokinchanButton").addEventListener("click", this.KokinchanButton_Click.bind(this));

        const div = this._panel;
        div.innerHTML = "";
        for (var i = 0; i < 256; i++) {
            const span = document.createElement("span") as HTMLElement;
            span.classList.add("dot");
            //span.innerText = div.children.length.toString();
            div.appendChild(span);
        }
    }
    private KokinchanButton_Click() {
        const kokinchan = new Kokinchan();
        this.Draw(kokinchan.getColorList());
    }

    public Draw(colorList: Array<ColorData>) {
        const div = this._panel;
        for (var i = 0; i < colorList.length; i++) {
            var colorData = colorList[i];
            var span = div.children[colorData.index] as HTMLElement;
            span.style["background-color"] = colorData.color;
        }
    }
}

class Kokinchan {
    private _ColorList = new Array<ColorData>();
    protected FaceColor = "#1e90ff";
    protected BackgroundColor = "#ffffff";
    protected EyesColor = "#32cd32";
    protected NoseColor = "#ff6347";
    protected RibbonColor = "#ff0000";
    protected OutlineColor = "#000000";
    protected CheekColor = "#dda0dd";

    private loadData() {
        this._ColorList = new Array<ColorData>();
        this.setColorList(this.getFaceColorList(), this.FaceColor);
        this.setColorList(this.getBackgroundColorList(), this.BackgroundColor);
        this.setColorList(this.getEyesColorList(), this.EyesColor);
        this.setColorList(this.getNoseColorList(), this.NoseColor);
        this.setColorList(this.getRibbonColorList(), this.RibbonColor);
        this.setColorList(this.getOutlineColorList(), this.OutlineColor);
        this.setColorList(this.getCheekColorList(), this.CheekColor);
    }
    private getFaceColorList(): Array<number> {
        const l = new Array<number>();
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

    }

    private getBackgroundColorList(): Array<number> {
        const l = new Array<number>();
        return l;
    }

    private getEyesColorList(): Array < number > {
        const l = new Array<number>();
        l.push(132);
        l.push(133);
        l.push(148);
        l.push(149);
        l.push(139);
        l.push(140);
        l.push(155);
        l.push(156);
        return l;
    }
    
    private getNoseColorList(): Array < number > {
        const l = new Array<number>();
        l.push(167);
        return l;
    }
    
    private getRibbonColorList(): Array < number > {
        const l = new Array<number>();
    l.push(23);
    l.push(25);
    l.push(55);
    l.push(57);
    for(var i = 39; i< 39 + 3; i++) {
    l.push(i);
}
   

     return l;
}

    
    
    private getOutlineColorList(): Array < number > {
        const l = new Array<number>();
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
    for(var i = 228; i< 228 + 9; i++) {
    l.push(i);

}
for (var i = 198; i < 198 + 5; i++) {
    l.push(i);
}
    return l;
}
    
    
    private getCheekColorList(): Array < number > {
    const l = new Array<number>();
    l.push(163);
        l.push(173);
        return l;
}
 private setColorList(indexList: Array < number >, color: string) {
    for (var i = 0; i < indexList.length; i++) {
        let colorData = new ColorData();
        colorData.index = indexList[i];
        colorData.color = color;
        this._ColorList.push(colorData);
    }
}

    public getColorList(): Array < ColorData > {
    this.loadData();
    return this._ColorList;
}
}

   
class ColorData {
    public index: number;
    public color: string;
}


document.addEventListener("DOMContentLoaded", function () {
    const page = new Canvas();
    page.initialize();
});