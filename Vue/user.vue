<template>
    <show_users :users="users"></show_users>
    <add_user></add_user>
</template>

<script>
    var ShowUser = require('./view_users.vue');
    var AddUser = require('./add_user.vue');
    export default {
        data: function() {
            return {
                users:[
                    {name:"Ahmed", age:20 ,job: "full stack web developer", gender:'male'},
                    {name:"Mohamed", age:26 ,job: "teacher", gender:'male'},
                    {name:"May", age:35 ,job: "Engineer", gender:'female'},
                ],
            }
        },
        components:{
            show_users:ShowUser,
            add_user:AddUser,
        },
    }
</script>
