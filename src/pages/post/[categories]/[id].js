const PostPage = () => {
  return  <h1>I am a post!</h1>
}

export const getServerSideProps = (context) => {
  console.log(context)
  return {props: {}}
}

export default PostPage