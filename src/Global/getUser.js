const getUser = async () => {
  const user = await fetch("http://localhost:3000/users");
  const data = await user.json();
  return await data
};
export default getUser
