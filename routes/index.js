import express from "express";
import Message from "../models/message.js";

const router = express.Router();

/* GET home page. */
router.get("/", async function (req, res, next) {
  const messages = await Message.find({});
  res.render("index", { messages });
});

router.get("/new", function (req, res, next) {
  res.render("form");
});

router.post("/new", async function (req, res, next) {
  const message = new Message({
    text: req.body.messageText,
    user: req.body.author,
  });
  await message.save();
  res.redirect("/");
});

export default router;
