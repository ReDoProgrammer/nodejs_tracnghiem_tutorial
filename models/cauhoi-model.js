const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cauhoiSchema = new Schema({
  cau_hoi: {
    type: String,
  },
  dap_an_a: {
    type: String,
  },
  dap_an_b: {
    type: String,
  },
  dap_an_c: {
    type: String,
  },
  dap_an_d: {
    type: String,
  },
  dap_an_dung: {
    type: String,
  },
  monhoc: {
    type: Schema.Types.ObjectId,
    ref: "monhoc",
  },
});

module.exports = mongoose.model("cauhoi", cauhoiSchema);
