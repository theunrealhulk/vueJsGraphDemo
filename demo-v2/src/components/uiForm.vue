<template>
  <div class="form">
    <form action="">
      <div class="form-group">
        <input type="text" placeholder="Username" name="username" />
      </div>
      <div class="form-group">
        <input type="password" name="password" id="" placeholder="password" />
      </div>
      <div class="form-group">
        <button>Login</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class uiForm extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
