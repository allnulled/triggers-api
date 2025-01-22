(function (factory) {
  const mod = factory();
  if (typeof window !== 'undefined') {
    window['TriggersApi'] = mod;
  }
  if (typeof global !== 'undefined') {
    global['TriggersApi'] = mod;
  }
  if (typeof module !== 'undefined') {
    module.exports = mod;
  }
})(function () {
  
  const TriggersApi = class extends TriggersClass {

    load(script) {
      const executableString = TriggersScriptParser.parse(script);
      const AsyncFunction = (async function() {}).constructor;
      const executableFunction = new AsyncFunction("triggers", executableString);
      return executableFunction(this);
    }

  }

  return TriggersApi;

});