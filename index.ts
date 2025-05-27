import { Elysia, t } from 'elysia'
import { users } from './src/data/users'
import { filterData } from './src/utils/filterData'
import { type Filter } from './src/models/filter'
import { swaggerPlugin } from './src/plugins/swagger'

const app = new Elysia()
  .use(swaggerPlugin)

  .get(
    '/users',
    ({ query }) => {
      const { field, value, operator, caseSensitive = true } = query

      if (!field || !value || !operator) {
        return users
      }

      const filters: Filter[] = [
        {
          field,
          value,
          operator,
          caseSensitive
        }
      ]

      const result = filterData(users, filters)
      return result
    },
    {
      query: t.Object({
        field: t.Optional(t.String()),
        value: t.Optional(t.String()),
        operator: t.Optional(t.String()),
        caseSensitive: t.Optional(t.Boolean())
      })
    }
  )

app.listen(3000)

console.log('✅ API rodando em http://localhost:3000')
console.log('✅ Swagger UI em http://localhost:3000/docs')
