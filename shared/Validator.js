function ValidateWithJoiQueryParams(req, req, next, schema){
  const { error, value } = schema.validate(req.query);

    if(error!==undefined){
      res.status(403).json(error);
    } else {
      req.body = value;
      next();
    };
}

module.exports = ValidateWithJoiQueryParams;