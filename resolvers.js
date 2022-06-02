const Post = require('./models/Post');

//Resolvers
const resolvers = {
    Query: {
        hello: () => { return "Hello World" },
        getAll: async () =>
        {
            return await  Post.find();
        },
    },
    Mutation: {
        createPost: async (parent, args, context, info) =>
        {
            const { title, description } = args.post;
            const post = await new Post({ title, description }).save();
            return post
        },
        updatePost: async (parent, args, context, info) =>
        {
            const {id} = args;
            const {  title, description } = args.post;
            
            const post = await  Post.findByIdAndUpdate(id, { title, description }, {new: true})
            return post
        },
        deletePost: async (parent, args, context, info) =>
        {
            const { id } = args;
            await Post.findByIdAndDelete(id);
            return "Post Deleted Successfully"
        }
    }
}

module.exports = resolvers;