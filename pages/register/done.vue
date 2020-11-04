<template>
  <div>
    <v-app-bar
      color="primary"
      dense
      flat
      dark
    >
      <v-toolbar-title>Register</v-toolbar-title>
    </v-app-bar>
    <v-container class="pt-0 pb-0">
      <v-row>
        <v-col cols="12">
          <div class="set-padding">
            <div class="text-center mt-10">
              <img src="~/assets/welcome1.png" alt="" width="236px">
              <h1 class="text-title">Welcome, {{ StudentID }}</h1>
              <p class="mt-7">
                Welcome to Digital Technology Innovation,<br/>ยินดีต้อนรับ นักศึกษาป.โท สาขา นวัตกรรมเทคโนโลยีดิจิทัล .<br/> We hope you have a good time here.
              </p>
            </div>
            <v-btn rounded color="primary" dark class="w-100 mt-10 my-btn" @click="Edit">Edit</v-btn>
            <div class="w-100 text-center my-btn outlined text-primary mt-5" @click="close">Close</div>                    
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {  
  data(){
    return {
      StudentID: this.$store.getters.getRegister.StudentID
    }
  },
  methods: {
    Edit(){
      this.$router.push('/Edit')
    },
        register() {
      if(this.validate()){
        this.$store.dispatch('setRegister', this.form)
        this.$axios.post('http://localhost:3000/api/v1/change-richmenu', {
        });
        this.$axios.patch(`https://hffchfd-fe5c4.firebaseio.com/members/${this.$store.getters.getLine.userId}/profile.json`, this.$store.getters.getRegister).then((res) => {
          this.$router.push('/register/done')
        }).catch(e => console.log(e))         
      }
        },
    close(){
      liff.closeWindow();
    }
  }
}
</script>