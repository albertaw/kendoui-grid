<template>
  <div id="app">
    <kendo-datasource ref="remoteDataSource"
      :transport-read-url="'https://uinames.com/api/?amount=40&ext'"
      :transport-read-data-type="'json'"
      :transport-update-data-type="'json'"
      :transport-destroy-url="'/'"
      :transport-destroy-data-type="'json'"
      :transport-create-url="'/'"
      :transport-create-data-type="'json'"
      :schema-model-id="'Email'"
      :schema-model-fields="schemaModelFields"
      :schema-parse="schemaParse"
      :page-size="5">
    </kendo-datasource>
    <kendo-grid 
      :data-source-ref="'remoteDataSource'"
      :pageable="true"
      :editable="'incell'"
      :toolbar="['create']">
      <kendo-grid-column :command="['destroy']"></kendo-grid-column>
      <kendo-grid-column :field="'Name'"></kendo-grid-column>
      <kendo-grid-column :field="'Surname'"></kendo-grid-column>
      <kendo-grid-column :field="'Region'"></kendo-grid-column>
      <kendo-grid-column :field="'Birthday'"></kendo-grid-column>
      <kendo-grid-column :field="'Email'"></kendo-grid-column>
    </kendo-grid>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      schemaModelFields: {
        Name: {type: 'string'},
        Surname: {type: 'string'},
        Region: {type: 'string'},
        Birthday: {type: 'string'},
        Email: {type: 'string'}
      }
    }
  },
  methods: {
    schemaParse: function(response) {
      return response.map(function(item) {
        return {
          Name: item.name,
          Surname: item.surname,
          Region: item.region,
          Birthday: item.birthday.mdy,
          Email: item.email
        }
      });
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  margin-top: 60px;
}
</style>
