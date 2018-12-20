<template>
  <div id="app">
    <kendo-datasource ref="remoteDataSource"
      :transport-read-url="'https://uinames.com/api/?amount=40&ext'"
      :transport-read-data-type="'json'"
      :page-size="10">
    </kendo-datasource>
    <kendo-grid 
      :data-source-ref="'remoteDataSource'"
      :pageable="true">
    </kendo-grid>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  margin-top: 60px;
}
</style>
