<template>
  <v-app>
    <v-content>
      <v-container fill-height>
        <v-layout d-flex justify-center align-center class="center-card">
          <v-card class="elevation-12" :style="{ width: '500px' }">
            <v-toolbar color="primary" dark flat>
              <v-toolbar-title class="toolbar-center"
                >Employee Management System</v-toolbar-title
              >
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                  label="Login"
                  name="Username"
                  prepend-icon="person"
                  type="text"
                ></v-text-field>

                <v-text-field
                  id="password"
                  label="Password"
                  name="password"
                  prepend-icon="lock"
                  type="password"
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="primary"
                class="text-none"
                rounded="0"
                variant="outlined"
                v-bind="props"
                @click="submit">Login</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "Login",

  data: function() {
        return {
            counter: 0,
            inputText: '',
        };
    },
    methods: {
    submit(){
       
        this.$router.push('/home');
    }

},
};
</script>
<style scoped>
.center-card {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.toolbar-center {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
</style>
