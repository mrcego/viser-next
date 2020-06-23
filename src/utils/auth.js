export default async function auth() {
  return this.$ls('get', 'token')
}
