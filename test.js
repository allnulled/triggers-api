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