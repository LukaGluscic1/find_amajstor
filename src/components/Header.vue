<template>
    <header>
      <nav>
        <ul>
          <li><router-link to="/">Početna</router-link></li>
          <li><router-link to="/kontakt">Kontakt</router-link></li>
          <li><router-link to="/majstorsam" id="majstor">Majstor sam!</router-link></li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'Header'
  };
  </script>
  
  <style scoped>
  header {
    background-color: transparent;
    color: #000;
    padding: 0px;
    text-align: justify;
}

nav ul {
    list-style: none;
    margin: 4px;
    padding: 4px;
    display: flex;
    justify-content: flex-start;
}

nav li {
    margin: 20px;
    font-weight: bold;
}

#majstor {
    font-weight: bold;
    color: #8559ff;
    border: 3px solid #cbb8ff;
    background: #cbb8ff;
    border-radius: 20px;
    padding: 10px;
} 
  </style>
  