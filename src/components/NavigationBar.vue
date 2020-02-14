<template>
  <!-- Navigation -->
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <img src="@/assets/logo.png" alt="YuGiOh logo" height="50">
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <router-link class="nav-link" to="/login">
              Login
              <span class="sr-only">(current)</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/register">Register</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>