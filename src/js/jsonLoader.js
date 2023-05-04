const allChefsListFetch = async ({ params }) => {
  const fetchdata = await fetch("http://localhost:5000/allchefs");
  const toJSON = await fetchdata.json();

  return toJSON;
};

const findChefLoader = async ({ params }) => {
  const fetchdata = await fetch("http://localhost:5000/allchefs");
  const toJSON = await fetchdata.json();
  const { chefs } = toJSON;
  const foundObject = chefs.find((elm) => elm._id === params.id);

  return foundObject;
};

export { allChefsListFetch, findChefLoader };
