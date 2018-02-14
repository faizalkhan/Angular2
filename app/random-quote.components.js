(function(appz)
{   var Component = ng.core.Component;
    var QuoteService = appz.QuoteService;
 
    appz.RandomQuoteComponent= Component({
        selector : 'random-quote',
        template : '<p><em>{{quote.line}}</em> - {{quote.author}}</p>'
    })
    .Class({
        constructor: [QuoteService, function RandomQuoteComponent(QuoteService){ 
          var self = this;
          
          QuoteService.generateRandomQuotes(2000, function(quote)
           {
              self.quote = quote;
              
          });
             
             // this.quote = QuoteService.getRandomQuotes(); 
            // this.quote = QuoteService.getRandomQuotes(); 
            
            
        }] 
    })
     
    
})(window.appz || (window.appz ={}));