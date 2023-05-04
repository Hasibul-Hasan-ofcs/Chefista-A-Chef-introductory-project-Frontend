const allChefsListFetch = async ({ params }) => {
  const fetchdata = await fetch(
    "https://chefista-backend-2u589g96u-hasibul-hasan-ofcs.vercel.app/allchefs"
  );
  const toJSON = await fetchdata.json();

  return toJSON;
};

const findChefLoader = async ({ params }) => {
  const fetchdata = await fetch(
    "https://chefista-backend-2u589g96u-hasibul-hasan-ofcs.vercel.app/allchefs"
  );
  const toJSON = await fetchdata.json();
  const { chefs } = toJSON;
  const foundObject = chefs.find((elm) => elm._id === params.id);

  return foundObject;
};

export { allChefsListFetch, findChefLoader };
