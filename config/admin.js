module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '992210ddc45f88658eb617a3c250c2f9'),
  },
});
