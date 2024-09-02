import "../public/build/entityRotation.js";
describe("EntityRotation", () => {
  it("should initialize with serverCalculated = false", () => {
    const entity = new pc.Entity();
    app.root.addChild(entity);
    entity.addComponent("script");
    // console.log("##### Scripts #######");
    // console.log(app.scripts.list());
    //
    // // Create script instance
    // const scriptInstance = entity.script.create("entityRotation");
    // console.log(scriptInstance); // Use this to
    //
    // // Assert that serverCalculated is false (default)
    // expect(scriptInstance.serverCalculated).to.be.false;
    //
    // // Initialize the script
    // scriptInstance.initialize();
    //
    // expect(scriptInstance.tumble).to.be.at.least(-200);
    // expect(scriptInstance.tumble).to.be.at.most(200);
    const scriptType = app.scripts.get("entityRotation");
    const instance = new scriptType({
      app: app,
      entity: entity,
      enabled: false,
      attributes: { serverCalculated: false },
    });
    console.log("### Instance");
    console.log(Object.keys(instance));
    expect(instance.serverCalculated).to.be.false;
  });

  it("should initialize with serverCalculated = true", () => {
    const entity = new pc.Entity();
    app.root.addChild(entity);
    entity.addComponent("script");
    const scriptInstance = entity.script.create("entityRotation");
    scriptInstance.serverCalculated = true;
    scriptInstance.initialize();

    expect(scriptInstance.tumble).to.be.undefined;
  });
});
