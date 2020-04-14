<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th>ID</th>
                <th class="text-left">From Person</th>
                <th class="text-left">To Person</th>
                <th>Connection Type</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(connection, index) of connections" :key="index">
                <td>
                  {{ connection.id }}
                </td>
                <td>
                  {{ connection.from_person | personalName }}
                </td>
                <td>
                  {{ connection.to_person | personalName }}
                </td>
                <td>
                  <v-select
                    dense
                    :items="connectionTypes"
                    :value="connection.connection_type"
                    @change="
                      value => updateConnectionType(connection.id, value)
                    "
                  ></v-select>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <v-snackbar v-model="updateSucessful">
          Update connection successful
          <v-btn color="pink" text @click="updateSucessful = false">
            Close
          </v-btn>
        </v-snackbar>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import store from "@/store";
import { mapGetters } from "vuex";
import {
  FETCH_CONNECTION_LIST,
  UPDATE_CONNECTION_TYPE
} from "@/store/actions.type";
import { connectionTypes } from "@/common/config";

export default {
  name: "ConnectionList",
  beforeRouteEnter(to, from, next) {
    store.dispatch(FETCH_CONNECTION_LIST).then(() => next());
  },
  computed: {
    ...mapGetters(["connections"])
  },
  data() {
    return {
      connectionTypes,
      updateSucessful: false
    };
  },
  methods: {
    updateConnectionType(id, type) {
      this.updateSucessful = false;
      store.dispatch(UPDATE_CONNECTION_TYPE, { id, type }).then(() => {
        this.updateSucessful = true;
      });
    }
  },
  filters: {
    personalName: function(person) {
      return `${person.first_name} ${person.last_name}`;
    }
  }
};
</script>
