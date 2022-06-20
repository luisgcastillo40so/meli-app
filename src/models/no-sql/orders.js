const { Schema, model } = require("mongoose")

const OrderSchema = new Schema(
  {
    customer: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    products: [
      {
        product: {
          type: Schema.Types.ObjectId,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
    total: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

module.exports = model("Order", OrderSchema)
