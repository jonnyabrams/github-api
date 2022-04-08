const GethubApi = require("./gethub_api");
const GethubModel = require("./gethub_model");
const GethubView = require("./gethub_view");

const api = new GethubApi();
const model = new GethubModel();
const view = new GethubView(model, api);