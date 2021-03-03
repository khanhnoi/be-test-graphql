const resolvers = {
  Query: {
    books: () => [
      {
        id: 1,
        name: "Dế Mèn Phiêu Kí",
        genre: "Phiêu Lưu",
      },
      {
        id: 2,
        name: "Làm giàu không khó",
        genre: "Giáo Dục",
      },
    ],
  },
};

module.exports = resolvers;
