<template>
  <v-layout>
    <v-row>
     
          <v-navigation-drawer
            v-model="drawer"
            :rail="rail"
            permanent
            @click="rail = false"
          >
            <v-list-item
              prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
              title="John Leider"
              nav
            >
              <template v-slot:append>
                <v-btn
                  variant="text"
                  icon="mdi-chevron-left"
                  @click.stop="rail = !rail"
                ></v-btn>
              </template>
            </v-list-item>

            <v-divider></v-divider>

            <v-list density="compact" nav>
              <v-list-item
                prepend-icon="mdi-home-city"
                title="All Employees"
                to="/home"
                value="employees"
              ></v-list-item>
              <v-list-item
                prepend-icon="mdi-account"
                title="Leave Days(Admin)"
                to="/LeaveDaysAdmin"
                value="adminleavedays"
              ></v-list-item>
              <v-list-item
                prepend-icon="mdi-account"
                to="/LeaveDaysEmployees"
                title="Leave Days(employee)"
                value="employeeleavesdays"
              ></v-list-item>
              <v-list-item
                prepend-icon="mdi-account-group-outline"
                title="Attendance(employee)"
                to="/attendance"
                value="attendance"
              ></v-list-item>
              <v-list-item
                prepend-icon="mdi-account-group-outline"
                title="Attendance(admin)"
                value="attendanceadmin"
                to="/attendanceadmin"
              ></v-list-item>
              <v-list-item
                prepend-icon="mdi-account-group-outline"
                title="Departments"
                to="/department"
                value="departments"
              ></v-list-item>
              <v-list-item
                prepend-icon="mdi-account-group-outline"
                title="Clients"
                to="/clients"
                value="client"
              ></v-list-item>
              <v-list-item
                prepend-icon="mdi-account-group-outline"
                title="Projects"
                to="/Projects"
                value="projects"
              ></v-list-item>
              <v-list-item
                prepend-icon="mdi-account-group-outline"
                title="Goal"
                to="/Goal"
                value="goals"
              ></v-list-item> 
            </v-list>
          </v-navigation-drawer>
          <v-app-bar
            color="teal-darken-4"
            image="https://picsum.photos/1920/1080?random"
          >
            <template v-slot:image>
              <v-img
                gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
              ></v-img>
            </template>

            <template v-slot:prepend>
              <v-app-bar-nav-icon></v-app-bar-nav-icon>
            </template>

            <v-app-bar-title>Title</v-app-bar-title>

            <v-spacer></v-spacer>

            <v-btn icon>
              <v-icon>mdi-magnify</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </v-app-bar>

          <v-main>
            <router-view></router-view>
          </v-main>
     
    </v-row>
  </v-layout>
</template>
<script>

export default {
  data() {
    return {
      drawer: true,
      rail: true,
    };
  },
};
</script>
