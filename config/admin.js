module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3dc60769ecc00a2769a7e87314086f46'),
  },
});
