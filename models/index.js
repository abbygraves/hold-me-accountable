const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

//User to Post associations
User.hasMany(Post, { foreignKey: "user_id" });
Post.belongsTo(User, { foreignKey: "user_id", onDelete: "set null" });

//User to Comment associations
User.hasMany(Comment, { foreignKey: "user_id", onDelete: "set null" });
Comment.belongsTo(User, { foreignKey: "user_id", onDelete: "set null" });

//Post to Comment associations
Post.hasMany(Comment, { foreignKey: "post_id" });
Comment.belongsTo(Post, { foreignKey: "post_id", onDelete: "set null" });

module.exports = { User, Post, Comment };
