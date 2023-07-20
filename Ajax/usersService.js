var usersService = {
  endpoint: "https://api.remotebootcamp.dev/api/users",
};
var payload = {
  email: "Neil@example.com",
  password: "Sabiopassword1!",
  tenantId: "U040S4N2UHW",
};
usersService.userLogin = (payload) => {
  const config = {
    method: "POST",
    url: usersService.endpoint + "/login",
    data: payload,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config)
    .then(function (data) {
      console.log(data);
    })
    .catch(function (data) {
      console.warn(data);
    });
};
