(function() {
        function async_load(target){
            var s = target.document.createElement('script');
            s.type = 'text/javascript';
            s.id = 'cavai-script';
            var theUrl = 'https://cloud.cavai.com/js/converses/widgets/converse-widget.b7b11995abb7fb687ff32038a766a059.min.js?bust=' + Date.now();
            s.src = theUrl;
            s.async = true;
            
            s.dataset.clickMacro = 'MACRO_PLACEHOLDER';
            s.dataset.bubbleAppearance = 'default'

            target.document.body.appendChild(s);
        }
        try {
          async_load(window.top)
        } catch (error) {
          async_load(window)
        }
    })();

 var clickFunction = function() {

        /*cavai code for clicking*/
        const openBubble = new MouseEvent('click');
        document.querySelector('.adbotic-chatbot-bubble-mob').dispatchEvent(openBubble);

        event.preventDefault();
        event.stopPropagation();
        return false;
    }

function winLoad(callback) {
  if (document.readyState === 'complete') {
    callback();
  } else {
    window.addEventListener("load", callback);
  }
}

winLoad(function() {
    console.log('page is fully loaded');
        try {
          setTimeout(function(){
          var target = top.document.querySelectorAll('.ayl_v_ckr_b')[0];
          var clickElement = document.createElement("div");
          clickElement.style.position = "absolute";
          clickElement.style.left = "0px";
          clickElement.style.top = "0px";
          clickElement.style.width = "100%";
          clickElement.style.height = "100%";
          if(target != null){
              target.appendChild(clickElement);
              target.addEventListener('click', clickFunction, true);
              target.addEventListener('touchstart', clickFunction, true);
          } else{
              target = top.document.querySelectorAll('.ayl_v_ckr_b')[0];
              target.addEventListener('click', clickFunction, true);
              target.addEventListener('touchstart', clickFunction, true);
          }},1000);

          } catch (e) {
            console.log(e)
          }
        });

