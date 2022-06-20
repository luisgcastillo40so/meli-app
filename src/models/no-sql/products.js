const { Schema, model } = require("mongoose")

const ProductSchema = new Schema(
  {
    name: String,
    email: String,
    password: String,
    imgUrl: [
      {
        original: {
          type: String,
          required: true,
        },
        samll: {
          type: String,
          required: true,
        },
        medium: {
          type: String,
          required: true,
        },
        large: {
          type: String,
          required: true,
        },
      },
    ],
    role: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

module.exports = model("Product", ProductSchema)
