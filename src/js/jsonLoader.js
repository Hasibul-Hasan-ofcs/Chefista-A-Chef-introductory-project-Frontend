const allChefsListFetch = async ({ params }) => {
  const fetchdata = await fetch("http://localhost:5000/allchefs");
  const toJSON = await fetchdata.json();
  //   const foundObject = toJSON.find((elm) => elm._id === params.id);

  return toJSON;
};

export { allChefsListFetch };
