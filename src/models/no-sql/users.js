const { Schema, model } = require("mongoose")

const UserSchema = new Schema(
  {
    name: {
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
    imgUrl: {
      type: String,
      default:
        "https://koohanimlaw.com/wp-content/uploads/2015/01/default-user-icon-profile.png",
    },
    birthdate: {
      type: Date,
      default: Date.now,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

module.exports = model("User", UserSchema)
