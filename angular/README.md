angular-modularize
==================

How to modularize an [Angular.js](http://angularjs.org/) app for an enterprise whith sub-module

```sh
app  
|____nonsense  
|____|____nonsense.module.js  
|____|____foo.ctrl.js  
|____|____bar.ctrl.js  
|____|____baz.filter.js  
|____apparel  
|____|____apparel.module.js  
|____|____hat.filter.js  
|____|____pants.service.js  
|____sounds  
|____|____sounds.module.js  
|____|____arf.service.js  
|____|____oink.html  
|____|____moo.directive.js  
|____people  
|____|____people.module.js  
|____|____bob.directive.js  
|____|____pat.html  
|____myapp.module.js  
```

In each of these sub-modules:

```javascript
angular.module('myApp.myModule');
```

In the App module:

```javascript
angular.module('myApp', [
   'myApp.nonsense', 
   'myApp.apparel', 
   'myApp.sounds', 
   'myApp.people']);
```