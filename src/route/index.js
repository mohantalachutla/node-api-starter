// Routes
const routes = [
  [
    '/',
    (req, res) => {
      res.status(200).send(`${process.env.APP_NAME ?? 'Express'} Api`)
    },
  ],
]

export default routes
