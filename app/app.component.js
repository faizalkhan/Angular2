(function(appz)
{   
     var Component = ng.core.Component;  
     appz.AppComponent   = Component({
        selector : 'my-app',
        template : '<h1> Random Quotes </h1>' + '<random-quote></random-quote>'
    })
    .Class({
        constructor: function(){}
    }) 

    
})(window.appz || (window.appz ={}));