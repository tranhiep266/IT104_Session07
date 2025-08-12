class User{
    id: string;
    posts:string[];
    followers:string[];
    constructor(id: string) {
        this.id = id;
        this.posts = [];
        this.followers = [];
    }
    createPost(post: Post): void {
        this.posts.push(post.id);
        console.log(`Post with ID ${post.id} created by User ${this.id}.`);
    }
    commentPost(post: Post, comment: CommentPost): void {
        post.comments.push(comment.id);
        console.log(`Comment with ID ${comment.id} added to Post ${post.id} by User ${this.id}.`);
    }
    followUser(user: User): void {
        user.followers.push(this.id);
        console.log(`User ${this.id} followed User ${user.id}.`);
    }
    viewFeed(posts: Post[]): void {
        console.log(`User ${this.id}'s feed:`);
        posts.forEach(post => {
            console.log(`Post ID: ${post.id}, User ID: ${post.userId}, Likes: ${post.likes.length}, Comments: ${post.comments.length}`);
        });
    }
}
class Post{
    id: string;
    likes: string[];
    comments: string[];
    userId: string;
    constructor(id: string, userId: string) {
        this.id = id;
        this.likes = [];
        this.comments = [];
        this.userId = userId;
    }
    addLike(userId:string): void {
        this.likes.push(userId);
        console.log(`User ${userId} liked Post ${this.id}.`);
    }
    addComment(comment: CommentPost): void {
        this.comments.push(comment.id);
        console.log(`Comment with ID ${comment.id} added to Post ${this.id}.`);
    }
}
class CommentPost{
    id:string;
    userId:string;
    content:string;
    replies: string[];
    constructor(id: string, userId: string, content: string) {
        this.id = id;
        this.userId = userId;
        this.content = content;
        this.replies = [];
    }
    addReply(reply: CommentPost): void {
        this.replies.push(reply.id);
        console.log(`Reply with ID ${reply.id} added to Comment ${this.id}.`);
    }
}
const user1 = new User("U001");
const user2 = new User("U002");
const post1 = new Post("P001", user1.id);
const post2 = new Post("P002", user2.id);
user1.createPost(post1);
user2.createPost(post2);
user1.followUser(user2);
user2.followUser(user1);
user1.commentPost(post2, new CommentPost("C001", user1.id, "Nice post!"));
user1.viewFeed([post1, post2]);
const comment1 = new CommentPost("C002", user2.id, "Thank you!");
post1.addComment(comment1);
post1.addLike(user2.id);
comment1.addReply(new CommentPost("C003", user1.id, "You're welcome!"));