<template>
  <ul v-show="opened">
    <li v-if="path == rootDir">
      <button class="add-in-root" @click="add(path)">
        <i class="fa fa-plus"></i>
      </button>
    </li>
    <li v-if="loading" class="loading-indicator">
      <i class="fa fa-circle-o-notch fa-spin"></i>
    </li>
    <li v-for="file in files">
      <div v-if="file.isDirectory" class="filename">
        <div :class="['folder', {'opened':isOpened(file.path)}]" @click="toggleDir(file.path)">
          {{file.name}}
        </div>
        <div class="fmgr-controls">
          <button title="Rename folder" @click="rename(file.path)">
            <i class="fa fa-pencil"></i>
          </button>
          <button title="Add file or folder" @click="add(file.path)">
            <i class="fa fa-plus"></i>
          </button>
          <button class="delete" title="Delete file" @click="unlink(file.path)">
            <i class="fa fa-times"></i>
          </button>
        </div>
      </div>
      <file-list v-if="file.isDirectory" :path="file.path"></file-list>
      <div v-else class="filename">
        <div :class="['file-'+file.extension]" @click="open(file.path)">
          {{file.name}}
        </div>
        <div class="fmgr-controls">
          <button title="Rename file" @click="rename(file.path)">
            <i class="fa fa-pencil"></i>
          </button>
          <button title="Copy file" @click="copy(file.path)">
            <i class="fa fa-copy"></i>
          </button>
          <button class="delete" title="Delete file" @click="unlink(file.path)">
            <i class="fa fa-times"></i>
          </button>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {

  name: 'file-list',
  props: {
    path: String
  },

  data: function() {
    return {
      loading: false,
      loaded: false,
      files: [],
    }
  },

  methods: {

    add: function(path) {
    },
    copy: function(path) {
    },
    rename: function(path) {
    },
    unlink: function(path) {
    },

    open: function(path) {
      this.$store.dispatch('OPEN_FILE', path);
    },
    toggleDir: function(path) {
      this.$store.dispatch('TOGGLE_DIR', path);
    },
    isOpened: function(path) {
      return this.$store.state.openedDirs.indexOf(path) !== -1;
    },
    loadFiles: function() {
      var component = this;
      var xhr = new XMLHttpRequest();
      xhr.open('POST', window.location.href+'?fn=scandir', true);
      var params = new FormData();
      params.append('path', component.path);

      xhr.onload = function() {
        var files;
        try {
          files = JSON.parse(xhr.responseText);
        } catch(e) {
          component.files = [];
          xhr.onerror();
          return;
        }
        for (var i=0; i<files.length; i++) {
          files[i].name = files[i].path.split('/').pop();
          if (!files[i].isDirectory) {
            files[i].extension = files[i].name.split('.').pop();
          }
        }
        component.$store.dispatch('SAVE_FILE_LIST', {path:component.path, list:files});
        component.files = component.$store.state.fileLists[component.path];
        component.loaded = true;
        component.loading = false;
      }
      xhr.onerror = function() {
        console.error(xhr.responseText);
        component.loading = false;
      }
      component.loading = true;
      xhr.send(params);
    },
  },

  computed: {
    opened: function() {
      return this.isOpened(this.path);
    },
    rootDir: function() {
      return this.$store.state.rootDir;
    }
  },

  watch: {
    opened: function(newval) {
      if (newval == true && !this.loaded) this.loadFiles();
    }
  },

  created: function() {
    if (this.opened && !this.loaded) this.loadFiles();
  }
}
</script>

<style></style>