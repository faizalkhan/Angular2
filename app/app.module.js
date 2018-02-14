(function(appz)
{   
    var NgModule = ng.core.NgModule;
    var BrowserModule = ng.platformBrowser.BrowserModule
    var QuoteService = appz.QuoteService;
    var RandomQuoteComponent = appz.RandomQuoteComponent;
    var AppComponent = appz.AppComponent;
          
      appz.AppModule = NgModule({        
        imports : [BrowserModule],
        declarations : [AppComponent,RandomQuoteComponent],
        providers : [
        {provide: QuoteService, useClass : QuoteService }
        ],
        bootstrap : [AppComponent]
    })
    .Class({        
        constructor :function()
        {
            
        }
        
    });

})(window.appz || (window.appz ={}));