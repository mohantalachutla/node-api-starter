const rootController = (req, res) => {
  res.status(200).send(`${process.env.APP_NAME ?? 'Express'} Api`)
}

const routes = [['/', rootController]]

export default routes
