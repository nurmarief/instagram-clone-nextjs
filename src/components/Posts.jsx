import Post from './Post'

export default function Posts() {
  const posts =[
      {
          id: '1',
          username: 'user-1',
          userImg: 'https://www.insoft.co.id/wp-content/uploads/2014/05/default-user-image.png',
          img: 'https://images.unsplash.com/photo-1643818507403-a3ed10760d16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
          caption: 'Picture of the day'

      },
      {
          id: '2',
          username: 'user-2',
          userImg: 'https://www.insoft.co.id/wp-content/uploads/2014/05/default-user-image.png',
          img: 'https://images.unsplash.com/photo-1643806720662-f9bc01be4e83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
          caption: 'My beautiful city'

      }
  ]

  return (
    <div>
      {posts.map(post =>(
          <Post
              key={post.id}
              id={post.id}
              username={post.username}
              userImg={post.userImg}
              img={post.img}
              caption={post.caption}
          />
      ))}
    </div>
  )
}