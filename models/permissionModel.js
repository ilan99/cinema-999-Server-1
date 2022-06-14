const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const permissionSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, required: true },
  permissions: { type: Array },
});

module.exports = mongoose.model("permission", permissionSchema);
