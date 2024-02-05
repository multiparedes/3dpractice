export const useColorMode = defineStore('colorMode', {
  state: () => ({ color: 'dark' }),
  getters: {
    colorMode: (state) => state.color,
  },
  actions: {
    setColor(newColor: string) {
      this.color = newColor
    },
  },
})
