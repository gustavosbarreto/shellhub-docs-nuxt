<template>
  <NuxtLayout>
    <v-app
      >
      <v-navigation-drawer
	v-model="drawer"
	app
	absolute
	theme="dark"
	class="bg-background"
	>
	<v-app-bar-title data-test="app-bar-title">
          <router-link
            to="/"
            class="text-decoration-none"
            >
            <div class="d-flex justify-center pa-4 pb-2">
              <v-img
		class="d-sm-flex hidden-sm-and-down"
		:src="Logo"
		max-width="140"
		alt="Shell logo, a cloud with the writing 'ShellHub' on the right side"
		data-test="logo"
		/>
            </div>
          </router-link>
	</v-app-bar-title>
	
	<div class="pa-0">
	  <p class="text-center text-subtitle-2 text-primary">DOCS</p>
	</div>
	
	<v-list class="bg-v-theme-surface" data-test="list">
          <v-list-item
            v-for="item in visibleItems"
            :key="item.title"
            :to="item.path"
            class="mb-2"
            data-test="list-item"
            >
            <div class="d-flex align-center">
              <v-list-item-title :data-test="item.icon + '-listItem'">
		{{ item.title }}
              </v-list-item-title>
            </div>
          </v-list-item>
          <v-col class="d-flex align-end justify-center">
          </v-col>
	</v-list>
      </v-navigation-drawer>

      <v-app-bar :elevation="0" :border="1" class="bg-background" style="border-bottom: 1px solid #333">
	<v-app-bar-title>
	  <v-breadcrumbs :items="['Home', 'Overview', 'Editions']">
	    <template v-slot:prepend>
	      <v-icon icon="mdi-home" size="small"></v-icon>
	    </template>
	  </v-breadcrumbs>
	</v-app-bar-title>
      </v-app-bar>
      
            <v-navigation-drawer
              location="right"
	      class="bg-background"
        permanent
	      >
	      <div class="pa-4">
		Content
		</div>
	      </v-navigation-drawer>
      
      <v-main data-test="main">
	<slot>
          <v-container
	    style="max-width: 960px;"
            class="pa-4"
            fluid
	    tag="section"
            >
	    <NuxtPage />
          </v-container>
	</slot>
      </v-main>
    </v-app>
  </NuxtLayout>
</template>

<script setup>
  import { toRef } from 'vue';
  import Logo from "../public/logo-inverted.png";

  const drawer = toRef(true)
  
  const visibleItems = [
  { title: "Introduction", path: "/", icon: "" },
  { title: "Overview", path: "/", icon: "" },
  { title: "Editions", path: "/docs/editions", icon: "" },
  { title: "Download", path: "/", icon: "" }
  ]
</script>

<style lang="sass">
  p
    margin-bottom: 1rem
    line-height: 1.8

    a, a:visited
      color: rgb(var(--v-theme-primary))

  h1
    + p
      font-size: 1.25rem
      font-weight: 300

  ul:not([class]),
  ol:not([class])
    padding-left: 20px
    margin-top: 16px
    margin-bottom: 16px
</style>
