function CCreditsPanel(){
    var _oListener;
    var _oFade;
    var _oPanelContainer;
    var _oButExit;
    var _oLogo;
    var _oPanel;
    
    var _pStartPanelPos;
    
    this._init = function(){
        
        _oFade = new createjs.Shape();
        _oFade.graphics.beginFill("black").drawRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
        _oFade.alpha = 0;
        _oFade.on("mousedown",function(){});
        s_oStage.addChild(_oFade);
        
        createjs.Tween.get(_oFade).to({alpha:0.2},500);
        
        _oPanelContainer = new createjs.Container();   
        s_oStage.addChild(_oPanelContainer);
        
        var oSprite = s_oSpriteLibrary.getSprite('msg_box');
        _oPanel = createBitmap(oSprite);   
        _oPanel.regX = oSprite.width/2;
        _oPanel.regY = oSprite.height/2;
        _oPanelContainer.addChild(_oPanel);
        _oListener = _oPanel.on("click",this._onLogoButRelease);
        
        _oPanelContainer.x = CANVAS_WIDTH/2;
        _oPanelContainer.y = - oSprite.height/2;  
        _pStartPanelPos = {x: _oPanelContainer.x, y: _oPanelContainer.y};
        createjs.Tween.get(_oPanelContainer).to({y:CANVAS_HEIGHT/2},1000, createjs.Ease.bounceOut);

        var oTitle = new createjs.Text(TEXT_DEVELOPED," 50px "+FONT, "#fff");
        oTitle.y = -70;
        oTitle.textAlign = "center";
        oTitle.textBaseline = "alphabetic";
        //_oPanelContainer.addChild(oTitle);

        var oLink = new createjs.Text("Saving Our Blue, Malta"," 56px "+FONT, "#fff");
        oLink.y = 106;
        oLink.textAlign = "center";
        oLink.textBaseline = "middle";
        oLink.lineWidth = 520;
        _oPanelContainer.addChild(oLink);
        
        var oSprite = s_oSpriteLibrary.getSprite('ctl_logo');
        _oLogo = createBitmap(oSprite);
        
        _oLogo.regX = oSprite.width/2;
        _oLogo.regY = oSprite.height;
        _oLogo.y = 0;
        _oPanelContainer.addChild(_oLogo);
      
        var oSprite = s_oSpriteLibrary.getSprite('but_exit');
        _oButExit = new CGfxButton(320, -210, oSprite, _oPanelContainer);
        _oButExit.addEventListener(ON_MOUSE_UP, this.unload, this);
    };
    
    this.unload = function(){
        createjs.Tween.get(_oFade).to({alpha:0},500);
        createjs.Tween.get(_oPanelContainer).to({y:_pStartPanelPos.y},400, createjs.Ease.backIn).call(function(){
            s_oStage.removeChild(_oFade);
            s_oStage.removeChild(_oPanelContainer);

            _oButExit.unload();
        }); 
        
        _oFade.off("mousedown",function(){});
        _oPanel.off("mousedown",_oListener);  
    };
    
    this._onLogoButRelease = function(){
        window.open("https://savingourblue.gov.mt/");
    };
    
    this._init();
    
    
};


