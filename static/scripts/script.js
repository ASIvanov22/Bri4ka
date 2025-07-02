(() => {

    // Module definitions
  
    var modules = {
  
      5550: function (module, exports, require) {
  
        // This module just requires other modules (likely side-effects)
  
        require(9461);
  
        require(7624);
  
        require(286);
  
        require(8334);
  
        require(2338);
  
        require(3695);
  
        require(322);
  
        require(941);
  
        require(5134);
  
        require(1655);
  
        require(9858);
  
        require(626);
  
      }
  
    };
  
    // Module cache
  
    var moduleCache = {};
  
    // The require function
  
    function require(moduleId) {
  
      // Return cached module if exists
  
      if (moduleCache[moduleId]) return moduleCache[moduleId].exports;
  
      // Create a new module and put it into the cache
  
      var module = {
  
        id: moduleId,
  
        loaded: false,
  
        exports: {}
  
      };
  
      moduleCache[moduleId] = module;
  
      // Execute the module
  
      modules[moduleId](module, module.exports, require);
  
      module.loaded = true;
  
      return module.exports;
  
    }
  
    // Expose the modules object
  
    require.m = modules;
  
    // Define getter functions for harmony exports
  
    require.d = (exports, definition) => {
  
      for (var key in definition) {
  
        if (Object.prototype.hasOwnProperty.call(definition, key) &&
  
            !Object.prototype.hasOwnProperty.call(exports, key)) {
  
          Object.defineProperty(exports, key, {
  
            enumerable: true,
  
            get: definition[key]
  
          });
  
        }
  
      }
  
    };
  
    // Mark a module as an ES module
  
    require.r = exports => {
  
      if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
  
        Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
  
      }
  
      Object.defineProperty(exports, '__esModule', { value: true });
  
    };
  
    // Handle dynamic import compatibility
  
    require.hmd = module => {
  
      module = Object.create(module);
  
      if (!module.children) module.children = [];
  
      Object.defineProperty(module, "exports", {
  
        enumerable: true,
  
        set: () => {
  
          throw new Error("ES Modules may not assign module.exports or exports.*");
  
        }
  
      });
  
      return module;
  
    };
  
    // Get the global object
  
    require.g = (() => {
  
      if (typeof globalThis === "object") return globalThis;
  
      try {
  
        return this || new Function("return this")();
  
      } catch (e) {
  
        if (typeof window === "object") return window;
  
      }
  
    })();
  
    // hasOwnProperty shorthand
  
    require.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
  
    // Create a fake "non-ES module"
  
    require.nmd = module => {
  
      module.paths = [];
  
      if (!module.children) module.children = [];
  
      return module;
  
    };
  
    // Runtime chunk loading helper
  
    (() => {
  
      var deferred = [];
  
      // Internal loader queue
  
      require.O = (result, chunkIds, fn, priority) => {
  
        if (chunkIds) {
  
          priority = priority || 0;
  
          for (var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) {
  
            deferred[i] = deferred[i - 1];
  
          }
  
          deferred[i] = [chunkIds, fn, priority];
  
          return;
  
        }
  
        var lowestPriority = Infinity;
  
        for (var i = 0; i < deferred.length; i++) {
  
          var [chunkIds, fn, priority] = deferred[i];
  
          var fulfilled = true;
  
          for (var j = 0; j < chunkIds.length; j++) {
  
            if ((priority & 1) === 0 || lowestPriority >= priority) {
  
              if (!Object.keys(require.O).every(key => require.O[key](chunkIds[j]))) {
  
                fulfilled = false;
  
                if (priority < lowestPriority) lowestPriority = priority;
  
                break;
  
              }
  
            }
  
          }
  
          if (fulfilled) {
  
            deferred.splice(i--, 1);
  
            var res = fn();
  
            if (res !== undefined) result = res;
  
          }
  
        }
  
        return result;
  
      };
  
    })();
  
    // Version function
  
    require.rv = () => "1.3.9";
  
    // Chunk loading logic
  
    (() => {
  
      var installedChunks = {
  
        350: 0 // chunkId -> 0 = loaded
  
      };
  
      require.O.j = chunkId => installedChunks[chunkId] === 0;
  
      var chunkCallback = (parentCallback, data) => {
  
        var [chunkIds, moreModules, runtime] = data;
  
        for (var moduleId in moreModules) {
  
          if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
  
            require.m[moduleId] = moreModules[moduleId];
  
          }
  
        }
  
        if (runtime) runtime(require);
  
        if (parentCallback) parentCallback(data);
  
        for (var i = 0; i < chunkIds.length; i++) {
  
          installedChunks[chunkIds[i]] = 0;
  
        }
  
        return require.O();
  
      };
  
      var chunkArray = self.webpackChunk = self.webpackChunk || [];
  
      chunkArray.forEach(chunkCallback.bind(null, 0));
  
      chunkArray.push = chunkCallback.bind(null, chunkArray.push.bind(chunkArray));
  
    })();
  
    // Just a string tag for tracking
  
    require.ruid = "bundler=rspack@1.3.9";
  
    // Kick things off
  
    var startup = require.O(undefined, ["87", "896"], function () {
  
      return require(5550); // Start with entry point
  
    });
  
    startup = require.O(startup);
  
  })();
   