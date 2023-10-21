export default function errorResponse(statusCode, message) {
   return {
      statusCode: statusCode,
      body: JSON.stringify({
         error: message,
      }),
   };
}
