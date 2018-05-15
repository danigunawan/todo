import { schema } from 'normalizr'

const todosSchema = new schema.Entity('todos')

const todosArraySchema = new schema.Array(todosSchema)

export default {
  todosSchema,
  todosArraySchema
}
