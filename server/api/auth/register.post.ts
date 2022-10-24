export default defineEventHandler(async (event) => {

  const body = await readBody(event)
  const { username, name, email, password } = body

  // TODO Left off here.

  return {

    hasErrors: false,
  }
})