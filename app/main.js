(function(appz)
 {
    var PlatformBrowserDynamic =  ng.platformBrowserDynamic.platformBrowserDynamic; 
    var AppModule = appz.AppModule;    
    
    PlatformBrowserDynamic().bootstrapModule(AppModule);
    
})(window.appz || (window.appz = {}));