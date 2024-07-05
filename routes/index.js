import express from "express";

const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { messages });
});

router.get("/new", function (req, res, next) {
  res.render("form");
});

router.post("/new", function (req, res, next) {
  if (req.body.messageText !== "" && req.body.author !== "")
    messages.push({
      text: req.body.messageText,
      user: req.body.author,
      added: new Date(),
    });
  res.redirect("/");
});

export default router;
