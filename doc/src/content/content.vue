<template>
  <section>
    <div class="mark-down" v-html="docCont"></div>
  </section>
</template>

<script>
  import marked from 'marked'
  import docs from './docs.js'
  export default {
    name: 'Home',
    data() {
      return {}
    },
    created() {
      marked.setOptions({
        renderer: new marked.Renderer(),
        gfm: true,
        tables: true,
        breaks: false,
        pedantic: false,
        sanitize: false,
        smartLists: true,
        smartypants: false
      })
    },
    computed: {
      docCont() {
        marked.setOptions({
          renderer: new marked.Renderer(),
          gfm: true,
          tables: true,
          breaks: false,
          pedantic: false,
          sanitize: false,
          smartLists: true,
          smartypants: false
        })
        let path = this.$route.path.replace('/', '')
        setTimeout(function () {
          let tags = document.getElementsByTagName('code')
          for(let tag of tags){
            hljs.highlightBlock(tag);
          }
        })
        if(path && docs[path]){
          return marked(docs[path])
        }else if(path === ''){
          return marked(docs['overview'])
        }else{
          return ''
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
