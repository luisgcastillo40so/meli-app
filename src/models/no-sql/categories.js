const { Schema, model } = require("mongoose")

const CategorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      maxlength: 200,
    },
    imgUrl: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

module.exports = model("Category", CategorySchema)
