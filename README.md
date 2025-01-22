# triggers-api

Triggers pattern through class and script language for node.js or browser.

## Installation

```sh
npm i -s @allnulled/triggers-api
```

## Importation

In node.js:

```js
require("@allnulled/triggers-api");
```

In html:

```html
<script src="node_modules/@allnulled/triggers-api/triggers-api.bundled.js"></script>
```

## Usage

The same as [TriggersClass API](https://github.com/allnulled/triggers-class) but with a `load(script)` method that accepts [TriggersScript Syntax](https://github.com/allnulled/triggers-script) to load the triggers from a string.

## Test

This is a test on how to register events by `load`, which is the only new thing from [TriggersClass API](https://github.com/allnulled/triggers-class):

```js
require(__dirname + "/triggers-api.bundled.js");

describe("Triggers API Test", function() {
  
  it("can load triggers", async function() {
    
    const triggers = new TriggersApi();

    global.counter = 5;

    console.log(triggers);
    console.log(triggers.load(`on event {{ "wherever" }} as {{ "TR002" }} then { always {{ global.counter = 50; }} }`));
    console.log(triggers);

    await triggers.emit("wherever");

    console.log(global.counter);

  });

});
```

## Use cases

For lighter approach, take only [TriggersClass API](https://github.com/allnulled/triggers-class), which covers the programmatic base in less than 100 lines.

For a more customizable, clearifier, reachable, etc. approach, take this API, which includes the [TriggersScriptParser](https://github.com/allnulled/triggers-script) global, and lets you load triggers by strings. But it takes aroung 2700 lines for the parser, mainly.

You can choose.

