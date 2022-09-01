const corsOptions = {
  origin: (process.env.ALLOW_ORIGINS ?? '').split(','),
  credentials: true,
  optionsSuccessStatus: 200,
}
export default corsOptions
