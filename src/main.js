import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

try {
  window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB
} catch (e) {
  console.log(e)
}
window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction
window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange

if (!window.indexedDB) {
  window.alert('Ihr Browser unterstützt keine stabile Version von IndexedDB. Dieses und jenes Feature wird Ihnen nicht zur Verfügung stehen.')
}

let db, transaction, objectStore
const request = window.indexedDB.open('anki-images', 3)

request.onerror = function (event) {
  console.error(event)
  alert('Database error occured, please check console for more information!')
}
request.onsuccess = function (event) {
  db = request.result
  db.transaction('images').objectStore('images').getAll().onsuccess = function (event) {
    store.commit('loadPics', event.target.result)
  }
}

request.onupgradeneeded = function (event) {
  const db = event.target.result

  db.createObjectStore('images', { keyPath: 'id' })
}

const savedPractises = localStorage.getItem('practises')
const savedTasks = localStorage.getItem('tasks')
const savedOpen = localStorage.getItem('open')
const savedClosed = localStorage.getItem('closed')
if (savedPractises || savedTasks || savedOpen || savedClosed) {
  store.commit('loadSave', { practises: JSON.parse(savedPractises), tasks: JSON.parse(savedTasks), open: JSON.parse(savedOpen), closed: JSON.parse(savedClosed) })
}

store.subscribe((mutation, state) => {
  localStorage.setItem('practises', JSON.stringify(state.practises))
  localStorage.setItem('tasks', JSON.stringify(state.tasks))
  localStorage.setItem('open', JSON.stringify(state.open))
  localStorage.setItem('closed', JSON.stringify(state.closed))
  if (mutation.type === 'createData' || mutation.type === 'editItem' || mutation.type === 'clearData') {
    console.log('trying to enter new image in IndexedDB . . .')
    transaction = db.transaction(['images'], 'readwrite')
    transaction.oncomplete = function (event) {
      console.log(event)
    }

    transaction.onerror = function (event) {
      console.error(event)
      alert('Database error occured, please check console for more information!')
    }

    objectStore = transaction.objectStore('images')
    if (mutation.type === 'editItem') {
      console.log('trying to delete ', mutation.payload.oldPic)
      objectStore.delete(mutation.payload.oldPic)
    } else if (mutation.type === 'clearData') {
      console.log('CLearing all data from database')
      objectStore.clear()
    } else {
      objectStore.add({ id: mutation.payload.id, data: mutation.payload.picture })
    }
  } else {
    console.log(mutation.type)
  }
})

/**
 * Useful code snippets:
 *
 * How to create a downloadable file:
 *
  function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }
 *
 *
 * How to store / load data from IndexedDB:
 *
  window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
  window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
  window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;

  if (!window.indexedDB) {
    window.alert("Ihr Browser unterstützt keine stabile Version von IndexedDB. Dieses und jenes Feature wird Ihnen nicht zur Verfügung stehen.");
  }

  var request = window.indexedDB.open("MeineTestdatenbank", 3);

  request.onerror = function(event) {
    // Machen Sie etwas mit request.errorCode!
  };
  request.onsuccess = function(event) {
    // Machen Sie etwas mit request.result!
  };

  var db;
  var request = indexedDB.open("MeineTestdatenbank");
  request.onerror = function(event) {
    alert("Warum haben Sie meiner Webapp nicht erlaubt IndexedDB zu verwenden?!");
  };
  request.onsuccess = function(event) {
    db = request.result;
  };

  var objectStore = db.createObjectStore("name", { keyPath: "myKey" });

  var transaction = db.transaction(["customers"], "readwrite");

  transaction.oncomplete = function(event) {
    alert("All done!");
  };

  transaction.onerror = function(event) {
    // Don't forget to handle errors!
  };

  var objectStore = transaction.objectStore("customers");
  for (var i in customerData) {
    var request = objectStore.add(customerData[i]);
    request.onsuccess = function(event) {
      // event.target.result == customerData[i].ssn;
    };
  }

  var transaction = db.transaction(["customers"]);
  var objectStore = transaction.objectStore("customers");
  var request = objectStore.get("444-44-4444");
  request.onerror = function(event) {
    // Handle errors!
  };
  request.onsuccess = function(event) {
    // Do something with the request.result!
    alert("Name for SSN 444-44-4444 is " + request.result.name);
  };

  db.transaction("customers").objectStore("customers").get("444-44-4444").onsuccess = function(event) {
    alert("Name for SSN 444-44-4444 is " + event.target.result.name);
  };

 *
 *
 *
 *
 */

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
