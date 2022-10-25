
const initState=
{
    posts:
    [
        { id: '1', title: 'Squirtle Laid an Egg', body: 'Lorem ipsum, dolor sit amet consectutur'},
        { id: '2', title: 'Charmander Laid an Egg', body: 'Lorem ipsum, dolor sit amet consectutur'},
        { id: '3', title: 'a Hrlix Fossil was Found', body: 'Lorem ipsum, dolor sit amet consectutur'}
    ]
}
const Reducers = (state=initState,action) => {
  if(action.type === 'DELETE_POST')
  {
    let newPosts = state.posts.filter(post => {
      return post.id !==action.id
    });
    return {
      ...state,
      posts:newPosts
    }
  }
  return state;
  
}

export default Reducers
