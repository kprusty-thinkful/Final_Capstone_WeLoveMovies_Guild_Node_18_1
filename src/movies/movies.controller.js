const service = require("./movies.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function movieExists(request, response, next) {
  const { movieId } = request.params;
  try {
    const data = await service.read(Number(movieId));
    if (data) {
      response.locals.movie = data;
      return next();
    } else {
      next({
        status: 404,
        message: "Movie cannot be found.",
      });
    }
  } catch (error) {
    return next(error);
  }
}

async function read(request, response) {
  response.status(200).json({ data: response.locals.movie });
}

async function list(request, response) {
  const { is_showing } = request.query;
  const data = await service.list(is_showing);

  response.status(200).json({ data });
}

module.exports = {
  list: [asyncErrorBoundary(list)],
  read: [asyncErrorBoundary(movieExists), read],
  movieExists,
};
