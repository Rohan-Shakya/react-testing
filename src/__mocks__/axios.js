const mockResponse = {
  data: {
    results: [
      {
        name: {
          first: "Rohan",
          last: "Shakya",
        },
        picture: {
          large: "https://randomuser.me/api/portraits/men/59.jpg",
        },
        login: {
          username: "ThePhonyGOAT",
        },
      },
    ],
  },
};

export default {
  get: jest.fn().mockResolvedValue(mockResponse),
};
