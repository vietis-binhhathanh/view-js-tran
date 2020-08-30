<template>
  <div>
    <h1>User List</h1>
    <br>
    <br>
    <ul class="list-group">
      <router-link 
        class="list-group-item"
        tag="li"           
        style="cursor: pointer"
        to="user/1">User 01</router-link>

        <router-link 
        class="list-group-item"
        tag="li"
        to="user/2"
        style="cursor: pointer">User 02</router-link>

        <router-link 
        class="list-group-item"
        tag="li"
        to="user/3"
        style="cursor: pointer">User 03</router-link>
    </ul>
  </div>
</template>