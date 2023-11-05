export default function errorHandler(err, req, res, next) {
   if (err.name === "JsonWebTokenError") {
      return res.status(401).json({ error: "authentication failed" });
   }
   res.status(500).json({ message: err.message });
}
