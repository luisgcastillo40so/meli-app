const { Schema, model } = require("mongoose")

const UserSchema = new Schema(
  {
    storeName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
      select: false,
    },
    profileImage: {
      type: String,
      default:
        "https://koohanimlaw.com/wp-content/uploads/2015/01/default-user-icon-profile.png",
    },
    address: {
      type: String,
      default: ""
    },
    settings: {
      backendUri: {
        type: String,
        default: ""
      },
      ordersEndpoint: {
        type: String,
        default: ""
      },
      productsEndpoint: {
        type: String,
        default: ""
      },
      suppliersEndpoint: {
        type: String,
        default: ""
      },
      customersEndpoint: {
        type: String,
        default: ""
      },
      supportEndpoint: {
        type: String,
        default: ""
      },
      backendToken: {
        type: String,
        default: ""
      },
    },
    integrations: {
      type: [{
        name: {
          type: String,
          required: true,
        },
        token: {
          type: String,
          required: true
        },
        _id: false,
        versionKey: false
      }],
      default: []
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

module.exports = model("User", UserSchema)
