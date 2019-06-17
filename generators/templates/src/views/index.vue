<template>
  <div id="index">
    index {{text}}
    <div class="comm">
      <com/>
    </div>
  </div>
</template>
<script>
import Com from '$component/com'
import { api } from '$api/api'

export default {
  data(){
    return{
      text:'demo'
    }
  },
  methods:{
    init(){
      let params = {
        data01:'xxx',
        data02:'xxx'
      }
      api(params).then(res=>{

      })
    }
  },
  mounted(){
    this.init()
  },
  components:{
    Com
  }
}
</script>

<style lang="scss" scoped>
#index{
  text-align: center;
  font-size: 30px;
  color: #f00;
  margin: 20px;
  .comm{
    margin-top: 20px;
  }
}
</style>
