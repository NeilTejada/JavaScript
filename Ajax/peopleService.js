var peopleService = {
  endpoint:
    "https://api.remotebootcamp.dev/api/people/paginate?pageIndex=0&pageSize=10",
};

peopleService.getPage = (pageIndex, pageSize) => {
    const config = {
      method: "GET",
        url: peopleService.endpoint,
        data: pageIndex,pageSize,
      crossdomain: true,
      headers: { "Content-Type": "application/json" },
    };
    return axios(config);
  };
