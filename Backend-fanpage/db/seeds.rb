# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#require 'faker'

Post.destroy_all
User.destroy_all
Comment.destroy_all

u1 = User.create(name: "Noah")
u2 = User.create(name: "Andy")

p1 = Post.create(img_url:"https://i.pinimg.com/564x/1a/66/53/1a665340a741d77aa9316451fba7f5eb.jpg", content:"Eazy", user_id: u1.id)
p2 = Post.create(img_url:"https://i.pinimg.com/564x/12/ec/e2/12ece2ddf627170142486d0184b72b91.jpg", content:"Chillin", user_id: u2.id)

c1 = Comment.create(user_id: u1.id, post_id: p1.id, content: "First comment")
c2 = Comment.create(user_id: u2.id, post_id: p2.id, content: "Second comment") 

