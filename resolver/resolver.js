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
    authors: () => [
      {
        id: 1,
        name: "Ngô Tất Tố",
        age: 127,
      },
      {
        id: 1,
        name: "Ngô Tất Tố",
        age: 127,
      },
      {
        id: 1,
        name: "Ngô Tất Tố",
        age: 127,
      },
    ],
  },
};

module.exports = resolvers;
