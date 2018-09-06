<template>
  <div>
    <table id="table1"></table>
    <button type="button" class="btn btn-info">（一般信息）Info</button>
  </div>
</template>

<script>
  export default {
    data(){
      return{}
    },
    mounted:function (){
      this.setTable();
    },
    methods:{
      setTable(){
        $('#table1').bootstrapTable({
          //url: 'data1.json',
          data: [
            {
              id: 1,
              name: 'Item 1',
              price: '$1'
            },
            {
              id: 2,
              name: 'Item 2',
              price: '$2'
            }
          ],
          columns: [
            {
              field: 'id',
              title: '序号'
            },
            {
              field: 'name',
              title: '姓名'
            },
            {
              field: 'price',
              title: '价格'
            }
          ]
        });
      }
    }
  }
</script>
<style>

</style>
