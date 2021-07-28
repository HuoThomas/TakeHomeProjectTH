exports.handlerException = (fn) => (req, res, next) => fn(req, res).catch(next);
