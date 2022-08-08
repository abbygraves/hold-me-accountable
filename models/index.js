const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");
const Update = require("./Update");

//User to Post associations
User.hasOne(Post, { foreignKey: "user_id" });
Post.belongsTo(User, { foreignKey: "user_id", onDelete: "set null" });

//User to Comment associations
User.hasMany(Comment, { foreignKey: "user_id", onDelete: "set null" });
Comment.belongsTo(User, { foreignKey: "user_id", onDelete: "set null" });


//User to Update associations
User.hasMany(Update, { foreignKey: "user_id"});
Update.belongsTo(User, { foreignKey: "user_id", onDelete: "set null"});

//Post to Update associations
Post.hasMany(Update, { foreignKey: "post_id" });
Update.belongsTo(Post, { foreignKey: "post_id", onDelete: "set_null" });


//Post to Comment associations
Post.hasMany(Comment, { foreignKey: "post_id" });
Comment.belongsTo(Post, { foreignKey: "post_id", onDelete: "set null" });


module.exports = { User, Post, Comment, Update };
