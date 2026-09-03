(function(){
    function installSeal() {
        var container = document.getElementById("lonline");
        if(!container) return false;
        
        if(container.querySelector(".lounge-seal")) return true;
        
        container.classList.add("lounge-seal-ready");
        
        container.style.position = "relative";
        container.style.display = "flex";
        container.style.alignItems = "center";
        container.style.justifyContent = "center";
        container.style.minHeight = "355px";
        container.style.height = "auto";
        container.style.padding = "12px 20px 22px";
        container.style.boxSizing = "border-box";
        container.style.backgroundColor = "#fafafa";
        container.style.outline = "1px solid lightgray";
        container.style.width = "100%";
        container.style.borderRadius = "0 0 24px 24px";
        
        var hideStyle = document.getElementById("seal-hide-style");
        if(!hideStyle) {
            hideStyle = document.createElement("style");
            hideStyle.id = "seal-hide-style";
            hideStyle.textContent = `
            #lonline > .fl,
            #lonline > .uzr,
            #lonline > div.fl.hand.nosel.uzr.uhtml {
                display: none !important;
            }
            `;
            document.head.appendChild(hideStyle);
        }
        
        var box = document.createElement("div");
        box.className = "lounge-seal";
        box.style.setProperty("--seal-flower-url", "url('donity')");
        box.innerHTML = `<div class="seal-flower-wrap"><span class="seal-flower-wreath"></span><div class="seal-circle"><span class="seal-rim"></span><span class="seal-rim-2"></span><span class="ring-outer"></span><span class="ring-inner"></span><span class="ring-core"></span><img src="donity" alt=""></div></div><div class="seal-text">مرحبا بكم في شاتكم </div><div class="seal-line"></div><div class="seal-sub">كونوا لطفاء فالعالم سيء بما يكفي</div><div style="margin-top:12px;direction:ltr;font-size:12px;color:#c47c7b;font-weight:500"><span style="display:inline-block;margin-left:8px;">Designed by <strong style="color:#e8917a">6rb</strong></span><span style="display:inline-block;margin-right:8px;">|</span><span style="display:inline-block;"> donity تصميم : <strong style="color:#e8917a">غمــــــوض</strong></span></div>`;
        
        container.appendChild(box);
        return true;
    }

    if(!document.getElementById("seal-main-style")) {
        var style = document.createElement("style");
        style.id = "seal-main-style";
        style.textContent = `
        #lonline.lounge-seal-ready {
            visibility: visible !important;
        }
        .lounge-seal {
            position: absolute !important;
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            bottom: 0 !important;
            width: 100% !important;
            height: 100% !important;
            z-index: 99999 !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            justify-content: center !important;
            text-align: center !important;
            direction: rtl !important;
            background: rgba(250,250,250,0.95) !important;
            backdrop-filter: blur(2px);
        }
        @keyframes loungeRoyalOuter{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
        @keyframes loungeRoyalInner{from{transform:rotate(0deg)}to{transform:rotate(-360deg)}}
        .seal-flower-wrap{position:relative;width:315px;height:292px;margin:0 auto}
        .seal-flower-wreath{position:absolute;left:50%;top:50%;width:315px;height:315px;z-index:1;transform:translate(-50%,-50%);background-image:var(--seal-flower-url);background-repeat:no-repeat;background-position:center;background-size:contain;opacity:.96;pointer-events:none}
        .seal-circle{width:176px;height:176px;border-radius:50%;position:absolute;left:calc(50% + 3px);top:50%;transform:translate(-50%,-45%);overflow:hidden;z-index:3;background:radial-gradient(circle at 34% 30%,#fffefa 0,#fbf5ef 34%,#f2e8dd 68%,#eadccf 100%);border:2px solid rgba(196,124,123,.48);box-shadow:0 0 0 1px rgba(255,255,255,.78) inset,0 0 0 7px rgba(196,124,123,.065),0 14px 34px rgba(0,0,0,.085),inset 0 1px 10px rgba(255,255,255,.56),inset 0 -8px 18px rgba(142,102,78,.05)}
        .seal-circle .seal-rim{position:absolute;inset:6px;border-radius:50%;border:1px solid rgba(196,124,123,.28);pointer-events:none}
        .seal-circle .seal-rim-2{position:absolute;inset:10px;border-radius:50%;border:1px solid rgba(188,158,112,.24);pointer-events:none}
        .seal-circle .ring-outer{position:absolute;inset:14px;border-radius:50%;border:1.5px solid rgba(196,124,123,.42);animation:loungeRoyalOuter 10s linear infinite;transform-origin:50% 50%;pointer-events:none}
        .seal-circle .ring-outer::before,.seal-circle .ring-outer::after{content:"";position:absolute;width:6px;height:6px;border-radius:50%;background:#c47c7b;top:50%;margin-top:-3px;box-shadow:0 0 0 2px rgba(255,249,240,.96),0 1px 5px rgba(196,124,123,.28)}
        .seal-circle .ring-outer::before{left:-3px}
        .seal-circle .ring-outer::after{right:-3px}
        .seal-circle .ring-inner{position:absolute;inset:25px;border-radius:50%;border:1px dashed rgba(196,124,123,.46);animation:loungeRoyalInner 10s linear infinite;transform-origin:50% 50%;pointer-events:none}
        .seal-circle .ring-core{position:absolute;inset:36px;border-radius:50%;border:1px solid rgba(188,158,112,.24);pointer-events:none}
        .seal-circle img{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);height:94px;max-width:118px;opacity:.99;z-index:3}
        .seal-text{margin-top:-2px;font-size:24px;line-height:1.9;font-weight:700;color:#000000;text-shadow:0 1px 0 rgba(255,255,255,.55)}
        .seal-line{width:96px;height:2px;margin:10px auto 8px;border-radius:99px;background:linear-gradient(90deg,transparent,rgba(188,158,112,.52),rgba(196,124,123,.62),rgba(188,158,112,.52),transparent)}
        .seal-sub{margin-top:0;font-size:14px;line-height:1.95;color:#000000}
        @media (max-width:520px){.seal-flower-wrap{width:250px;height:218px}.seal-flower-wreath{width:252px;height:252px}.seal-circle{width:148px;height:148px;left:calc(50% + 2px)}.seal-circle img{height:80px}.seal-text{font-size:20px;margin-top:-10px}}
        `;
        document.head.appendChild(style);
    }
    
    setTimeout(installSeal, 500);
    
    var observer = new MutationObserver(function(mutations) {
        for(var i = 0; i < mutations.length; i++) {
            if(mutations[i].type === 'childList') {
                var container = document.getElementById("lonline");
                if(container && !container.querySelector(".lounge-seal")) {
                    setTimeout(installSeal, 100);
                }
            }
        }
    });
    
    var waitForContainer = setInterval(function() {
        var container = document.getElementById("lonline");
        if(container) {
            clearInterval(waitForContainer);
            observer.observe(container, { childList: true, subtree: true });
        }
    }, 200);
})();
