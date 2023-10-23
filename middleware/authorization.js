import jwt from "jsonwebtoken";

export function userAuthorization(req, res, next) {
   try {
      const token = req.headers.authorization;
      if (!token) {
         return res.status(401).json({ message: "You need to login first" });
      }
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.body.user = decoded.id;
      next();
   } catch (error) {
      next(error);
   }
}
