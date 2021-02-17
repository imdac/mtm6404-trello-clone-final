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
  },
  created: function () {
    const cards = localStorage.getItem('cards')

    if (cards) {
      this.cards = JSON.parse(cards)
    }
  },
  computed: {
    toDo: function () {
      return this.cards.filter(card => card.list === 'To Do')
    },
    doing: function () {
      return this.cards.filter(card => card.list === 'Doing')
    },
    done: function () {
      return this.cards.filter(card => card.list === 'Done')
    }
  },
  methods: {
    addCard: function (list) {
      this.cards.push({
        list: list,
        text: 'New card...'
      })
    }
  },
  watch: {
    cards: {
      deep: true,
      handler: function (cards) {
        localStorage.setItem('cards', JSON.stringify(cards))
      }
    }
  }
})

const vm = app.mount('#app')
