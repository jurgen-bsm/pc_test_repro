import * as pc from "playcanvas";
import { expect } from "chai";
import { HTMLCanvasElement } from "@playcanvas/canvas-mock";
// Mock the global `pc` object to make it accessible
global.expect = expect;
global.pc = pc;

// Create a variable to hold the app
let app;

const canvas = new HTMLCanvasElement(500, 500);

// Initialize the PlayCanvas application with a NullGraphicsDevice
app = new pc.Application(canvas, {
  graphicsDevice: new pc.NullGraphicsDevice(canvas),
  componentSystems: [pc.ScriptComponentSystem],
  resourceHandler: [pc.ScriptHandler],
});

// Make the app globally available for each test
global.app = app;
