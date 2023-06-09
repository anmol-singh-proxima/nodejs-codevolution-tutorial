/* CommonJS Modules */
function commonjsModules() {
  sum = require("./1_CommonJS_Modules/add");
  console.log("Sum:", sum(10, 20));
  console.log("Sum:", sum(100, 200));
}

/* Module Scope */
function moduleScope() {
  require("./2_Module_Scope/thor");
  require("./2_Module_Scope/hulk");
}
// moduleScope()

/* Module Wrapper */
function moduleWrapper() {
  require("./3_Module_Wrapper/iife");
}
// moduleWrapper()

/* Module Caching */
function moduleCaching() {
  const Avenger = require("./4_Module_Caching/avenger");
  const natasha = new Avenger("Natasha Romanoff");
  console.log(natasha.getName());
  natasha.setName("Black Widow");
  console.log(natasha.getName());
  const wanda = new Avenger("Scarlett Witch");
  console.log(wanda.getName());
}
// moduleCaching()

/* Module Import Patterns */
function moduleImportPatterns() {
  const math = require("./5_Import_Export_Patterns/math");
  console.log(math.add(20, 10));
  console.log(math.sub(20, 10));
  console.log(math.mul(20, 10));
}

/* Import JSON */
function importJson() {
  const data = require("./7_Import_Json/data.json");
  console.log("Data:", data);
}
// importJson()

/* CallBack function */
function callBacks() {
  require("./9_CallBacks/callBackFunction");
}
// callBacks()

/* Streams and Buffers */
function streamsAndBuffers() {
  require("./10_StreamsAndBuffers/buffers");
}
streamsAndBuffers()

/* BuiltIn Modules */
function builtInModules() {
  require("./8_BuiltInModules/index");
}

/* libuv: Thread Pool */
function threadPool() {
  require("./11_libuv/threadPool");
}

/* Event Loop */
function eventLoop() {
  require('./12_EventLoop/eventLoop')
}

/* npm packages */
function npmPackage() {
  require('./13_npm/npm-tools')
}

/* Cluster Module */
function clusterModule() {
  // require('./14_ClusterModule/no-cluster');
  require('./14_ClusterModule/cluster');
}

/* Worker-Thread Module */
function workerThread() {
  require('./15_WorkerThreadModule/main-thread');
}

/* Function calls to execute code block */
// builtInModules();
// threadPool();
// eventLoop();
// npmPackage();
// clusterModule();
// workerThread();