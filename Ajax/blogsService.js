var blogsService = { endpoint: "https://api.remotebootcamp.dev/api/blogs" };

// var payload = {
//   authorId: 650877952,
//   title: "string1",
//   content: "string1",
//   id: 283878077,
// };

blogsService.getAll = () => {
  const config = {
    method: "GET",
    url: blogsService.endpoint,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

blogsService.add = (payload) => {
  const config = {
    method: "POST",
    url: blogsService.endpoint,
    data: payload,
    crossdomain: true,
    headers: { "Content-Type": "apllication/json" },
  };
  return axios(config);
};

blogsService.getById = (id) => {
  const config = {
    method: "GET",
    url: blogsService.endpoint + "/962870188",
    data: id,
    crossdomain: true,
    headers: { "Content-Type": "apllication/json" },
  };
  return axios(config);
};

blogsService.update = (id, payload) => {
  console.log("deleteById is executing");
  const config = {
    method: "PUT",
    url: blogsService.endpoint + "/954826022",
    data: {
      id: 954826022,
      authorId: 650877952,
      title: "Updated title",
      content: "Updated content from the testing framework",
    },
    crossdomain: true,
    headers: { "Content-Type": "apllication/json" },
  };
  return axios(config);
};

blogsService.deleteById = (id) => {
  const config = {
    method: "DELETE",
    url: `${blogsService.endpoint}/${id}`,
    data: id,
    crossdomain: true,
    headers: { "Content-Type": "apllication/json" },
  };
  return axios(config).then(() => id);
};
