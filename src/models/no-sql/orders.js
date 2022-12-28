const { Schema, model } = require("mongoose")

const OrderSchema = new Schema(
  {
    customer: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    products: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
        versionKey: false,
        _id: false
      },
    ],
    total: {
      type: Number,
      required: true,
    },
    storeId: {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

module.exports = model("Order", OrderSchema)
