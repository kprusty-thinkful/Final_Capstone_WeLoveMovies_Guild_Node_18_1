const service = require("./movies.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function movieExists(request, response, next) {
  const { movieId } = request.params;
  try {
    const data = await service.read(movieId);
    if (data) {
      response.locals.movie = data;
      return next();
    } else {
      next({
        status: 404,
        message: `Movie with ID: ${movieId} is not found`,
      });
    }
  } catch (error) {
    return next(error);
  }
}

async function read(request, response) {
  // TODO: Add your code here
  response.json({ data: "" });
}

async function list(request, response) {
  const { isShowing } = request.query;
  const data = await service.list(isShowing);

  response.status(200).json({ data });
}

module.exports = {
  list: [asyncErrorBoundary(list)],
  read: [asyncErrorBoundary(movieExists), read],
};
