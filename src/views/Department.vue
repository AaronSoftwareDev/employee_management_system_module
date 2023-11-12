

<template>
    <v-container class="scroll-y pt-8">
      <v-row align="center" justify="center">
        <v-col>
          <v-card class="mx-auto my-8" max-width="344" elevation="16">
            <v-card-item>
              <v-card-title> Card title </v-card-title>
              <v-card-subtitle> Card subtitle secondary text </v-card-subtitle>
            </v-card-item>
  
            <v-card-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </v-card-text>
          </v-card>
        </v-col>
  
        <v-col>
          <v-card class="mx-auto my-8" max-width="344" elevation="16">
            <v-card-item>
              <v-card-title> Card title </v-card-title>
              <v-card-subtitle> Card subtitle secondary text </v-card-subtitle>
            </v-card-item>
  
            <v-card-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </v-card-text>
          </v-card>
        </v-col>
  
        <v-col>
          <v-card class="mx-auto my-8" max-width="344" elevation="16">
            <v-card-item>
              <v-card-title> Card title </v-card-title>
              <v-card-subtitle> Card subtitle secondary text </v-card-subtitle>
            </v-card-item>
  
            <v-card-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </v-card-text>
          </v-card>
        </v-col>
  
        <v-col>
          <v-card class="mx-auto my-8" max-width="344" elevation="16">
            <v-card-item>
              <v-card-title> Card title </v-card-title>
              <v-card-subtitle> Card subtitle secondary text </v-card-subtitle>
            </v-card-item>
  
            <v-card-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
  
      <v-row no-gutters>
        <v-col cols="12">
          <Datatable :employees="jsonData" :employeeHeaders="headers" />
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  import Datatable from "../components/Datatable.vue";
  
  export default {
    components: {
      Datatable,
    },
    name:'Department',
    data() {
      return {
        headers: [
          {
            title: "ID",
            align: "start",
            sortable: false,
            key: "id",
          },
          { title: "Name", key: "name" },
          { title: "Position", key: "position" },
          { title: "Department", key: "department" },
          { title: "Salary", key: "salary" },
          { title: "Actions", key: "actions", sortable: false },
        ],
        jsonData: null,
      };
    },
    beforeMount() {
      fetch("/src/Data/employees.json")
        .then((response) => response.json())
        .then((data) => {
          this.jsonData = data.employees;
  
          console.log(this.jsonData);
        })
        .catch((error) => {
          console.error("Error fetching JSON data:", error);
        });
    },
  };
  </script>








