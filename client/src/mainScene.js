var MainLayer = cc.Layer.extend({
    background: null,
    qiandaoMu: null,
    qiandaoMenuItem: null,
    qiandaoLabel: null,
    yesMu: null,
    //prizeUI:null,
    ctor: function () {

        this._super();
        //pomeloChat();
        //进入游戏就要确定唯一的用户id
        //var uid = "wu";

        var size = cc.winSize;


        this.background = new cc.Sprite(res.Bg_png);
        this.background.attr({
            x: size.width / 2,
            y: size.height / 2
        });
        this.addChild(this.background, 0);


        //“炸金花”按钮
        var gameItem = new cc.MenuItemImage(
            res.Classic_png,
            res.Classic_png,
            function () {
                console.log("“炸金花”按钮");
                this.entryGame();
                //queryEntry(uid, rid);
                //this.removeChild(this.prizeUI);
                //chatSend();
            }, this);

        gameItem.attr({
            x: 640,
            y: 360,
            anchorX: 0.5,
            anchorY: 0.5
        });

        //排行耪按钮
        var rankingMenuItem=new cc.MenuItemImage(
            res.RankingMenu_png,
            res.RankingMenu_png,
            function(){
                //跳转到排行耪场景
                cc.director.runScene(new RankingScene());
            }, this
        );
        rankingMenuItem.attr({
            x: 640+550,
            y: 100,
            anchorX: 0.5,
            anchorY: 0.5
        });
        var rankingMenu=new cc.Menu(rankingMenuItem);
        rankingMenu.x=0;
        rankingMenu.y=0;
        this.background.addChild(rankingMenu, 1);

        var gameMenu = new cc.Menu(gameItem);
        gameMenu.x   = 0;
        gameMenu.y   = 0;
        this.background.addChild(gameMenu, 1);

        //关闭按钮
        var closeItem = new cc.MenuItemImage(
            res.CloseNormal_png,
            res.CloseSelected_png,
            function () {
                //cc.director.end();
            }, this);
        closeItem.attr({
            x: size.width - 50,
            y: size.height - 50,
            anchorX: 0.5,
            anchorY: 0.5
        });

        var closeMenu = new cc.Menu(closeItem);
        closeMenu.x   = 0;
        closeMenu.y   = 0;
        this.addChild(closeMenu, 1);

        //添加“用户信息”层
        this.lobbyInfoUI = new lobbyInfoLayer();
        this.addChild(this.lobbyInfoUI, 3);

        return true;
    },

    entryGame: function () {
        uid = playerId;
        GameScene(playerId,100);
    }

});

var MainScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var layer = new MainLayer();
        this.addChild(layer);

    }
});

