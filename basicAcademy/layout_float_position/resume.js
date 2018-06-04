(function () {

    function addHandler(element, type, handler) {
        if (element.addEventListener) {
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent("on" + type, handler);
        } else {
            element['on' + type] = handler;
        }
    }

    function getEvent(event) {
        return event ? event : window.event;
    }

    function getTarget(event) {
        return event.target || event.srcElement;
    }

    var btn = document.querySelector('.buttonGroup');
    // var btn1 = document.querySelector('#button1');
    // var btn2 = document.querySelector('#button2');
    // var btn3 = document.querySelector('#button3');

    addHandler(btn, 'click', function (event) {
        event = getEvent (event);
        var target = getTarget(event);
        // var head = document.getElementsByTagName('head')[0];
        // var link = document.createElement('link');

        switch (target.id){
            case 'button1':
                document.getElementsByTagName('link')[0].href = './css/style_1.css';
                // link.href = './css/style_1.css';
                // link.rel = 'stylesheet';
                // link.type = 'text/css';
                // head.appendChild(link);

                break;
            case 'button2':
                document.getElementsByTagName('link')[0].href = './css/style_2.css';
                // link.href = './css/style_2.css';
                // link.rel = 'stylesheet';
                // link.type = 'text/css';
                // head.appendChild(link);
                // // sheet = document.styleSheets[0];
                // // sheet.href = './css/style_1.css';
                // // console.log(sheet);

                break;
            case 'button3':
                document.getElementsByTagName('link')[0].href = './css/style_3.css';
                // link.href = './css/style_3.css';
                // link.rel = 'stylesheet';
                // link.type = 'text/css';
                // head.appendChild(link);
                break;
        }
    });
})();