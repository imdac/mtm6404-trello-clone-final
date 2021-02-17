const app = Vue.createApp({
  data: function () {
    return {
      lists: ['To Do', 'Doing', 'Done', 'Trash'],
      cards: [
        {
          list: 'To Do',
          text: 'Create new card feature'
        },
        {
          list: 'Doing',
          text: 'Create move card feature'
        },
        {
          list: 'Done',
          text: 'Create display cards feature'
        }
      ]
    }
  }
})

const vm = app.mount('#app')
