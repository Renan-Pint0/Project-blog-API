module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: { type:DataTypes.INTEGER, primaryKey: true, autoIncrement:true },
    title: { type:DataTypes.STRING, alloNull: false },
    content: { type:DataTypes.STRING, alloNull: false },
    userId: { type:DataTypes.INTEGER, alloNull: false, foreignKey: true },
    published: { type:DataTypes.DATE, alloNull: false },
    updated: { type:DataTypes.DATE, alloNull: false },
  },
  {
    timestamps: false,
    underscored: true,
    tableName: 'blog_posts',
    createdAt: 'published',
    updatedAt: 'updated',
  });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, {
      foreignKey: 'userId', as: 'user'
    });
  }
  return BlogPost;
};