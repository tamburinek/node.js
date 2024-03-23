/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = async function (knex) {
    await knex.schema.alterTable('todos', (table) => {
        table.enu('priority', ['LOW', 'MEDIUM', 'HIGH']).notNullable().defaultTo("LOW")
    })
  }
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  export const down = async function (knex) {
    await knex.schema.alterTable('todos', (table) => {
      table.dropColumn('priority')
    })
  }
