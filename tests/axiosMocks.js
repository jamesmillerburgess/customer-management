const axios = {
  post: () => ({ then: cb => cb({ data: {} }) }),
};

export default axios;
