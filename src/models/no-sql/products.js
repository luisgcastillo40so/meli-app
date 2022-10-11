const { Schema, model } = require("mongoose")

const ProductSchema = new Schema(
  {
    productName: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: ""
    },
    category: String,
    soldCount: {
      type: Number,
      default: 0
    },
    cost: {
      type: Number,
      default: 0
    },
    currency: {
      type: String,
      default: "U$D"
    },
    rate: {
      type: Number,
      default: 0
    },
    reviews: {
      type: Number,
      default: 0
    },
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
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

module.exports = model("Product", ProductSchema)
