module.exports = (error, _, response) => {
  console.error(error);
  response.sendStatus(500);
};
