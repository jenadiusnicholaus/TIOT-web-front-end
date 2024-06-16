<template>
  <div class="main-content">
    <!-- <breadcumb :page="'Chat'" :folder="'apps'" /> -->

    <div class="card chat-sidebar-container sidebar-container">
      <div class="chat-sidebar-wrap sidebar" :class="{ 'ml-0': isMobile }">
        <div class="border-right">
          <div
            class="pt-2 pb-2 pl-3 pr-3 d-flex align-items-center o-hidden box-shadow-1 chat-topbar"
          >
            <a class="link-icon d-md-none" @click="isMobile = !isMobile">
              <i class="icon-regular ml-0 mr-3 i-Left"></i>
            </a>
            <div class="form-group m-0 flex-grow-1">
              <input
                type="text"
                class="form-control form-control-rounded"
                id="search"
                v-model="search"
                placeholder="Search contacts"
              />
            </div>
          </div>

          <vue-perfect-scrollbar
            :settings="{ suppressScrollX: true, wheelPropagation: false }"
            class="contacts-scrollable perfect-scrollbar rtl-ps-none ps scroll"
          >
            <div>
              <div
                class="mt-3 pb-2 d-flex justify-content-between pl-3 pr-3 font-weight-bold text-muted border-bottom"
              >
                Contacts ({{ filterContacts.length }})

                <b-button v-b-modal.modal-sm2 variant="outline-success m-0 p-2">
                  <span class="ul-btn__icon"
                    ><i class="i-Add-UserStar"></i
                  ></span>
                </b-button>
              </div>

              <div
                class="p-3 d-flex border-bottom align-items-center contact"
                v-for="contact in filterContacts"
                :key="contact.id"
                :class="contact.status"
                @click="changeSelectedUser(contact.id)"
              >
                <img
                  :src="contact.avatar"
                  alt=""
                  class="avatar-sm rounded-circle mr-3"
                />
                <h6 class="">{{ contact.name }}</h6>
              </div>
            </div>
          </vue-perfect-scrollbar>
        </div>
      </div>
      <div class="chat-content-wrap sidebar-content">
        <div
          class="d-flex pl-3 pr-3 pt-2 pb-2 o-hidden box-shadow-1 chat-topbar"
        >
          <a class="link-icon d-md-none" @click="isMobile = !isMobile">
            <i class="icon-regular i-Right ml-0 mr-3"></i>
          </a>
          <div class="d-flex align-items-center">
            <img
              :src="getSelectedUser.avatar"
              alt=""
              class="avatar-sm rounded-circle mr-2"
            />
            <p class="m-0 text-title text-16 flex-grow-1">
              {{ getSelectedUser.name }}
            </p>
          </div>
        </div>
        <vue-perfect-scrollbar
          :settings="{ suppressScrollX: true, wheelPropagation: false }"
          class="chat-content perfect-scrollbar rtl-ps-none ps scroll"
        >
          <div>
            <div class="d-flex mb-30">
              <div class="message flex-grow-1">
                <div class="d-flex">
                  <p class="mb-1 text-title text-16 flex-grow-1">
                    {{ getSelectedUser.name }}
                  </p>
                  <span class="text-small text-muted">25 min ago</span>
                </div>
                <p class="m-0">
                  Do you ever find yourself falling into the “discount trap?
                </p>
              </div>
              <img
                :src="getSelectedUser.avatar"
                alt=""
                class="avatar-sm rounded-circle ml-3"
              />
            </div>

            <div class="d-flex mb-30 user">
              <img
                src="@/assets/images/faces/1.jpg"
                alt=""
                class="avatar-sm rounded-circle mr-3"
              />
              <div class="message flex-grow-1">
                <div class="d-flex">
                  <p class="mb-1 text-title text-16 flex-grow-1">Jhon Doe</p>
                  <span class="text-small text-muted">24 min ago</span>
                </div>
                <p class="m-0">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
            <div class="d-flex mb-30">
              <div class="message flex-grow-1">
                <div class="d-flex">
                  <p class="mb-1 text-title text-16 flex-grow-1">
                    {{ getSelectedUser.name }}
                  </p>
                  <span class="text-small text-muted">25 min ago</span>
                </div>
                <p class="m-0">
                  Do you ever find yourself falling into the “discount trap?
                </p>
              </div>
              <img
                :src="getSelectedUser.avatar"
                alt=""
                class="avatar-sm rounded-circle ml-3"
              />
            </div>
            <div class="d-flex mb-30 user">
              <img
                src="@/assets/images/faces/1.jpg"
                alt=""
                class="avatar-sm rounded-circle mr-3"
              />
              <div class="message flex-grow-1">
                <div class="d-flex">
                  <p class="mb-1 text-title text-16 flex-grow-1">Jhon Doe</p>
                  <span class="text-small text-muted">24 min ago</span>
                </div>
                <p class="m-0">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
        </vue-perfect-scrollbar>

        <div class="pl-3 pr-3 pt-3 pb-3 box-shadow-1 chat-input-area">
          <form class="inputForm" @submit.prevent="sendMessage">
            <div class="form-group">
              <textarea
                class="form-control form-control-rounded"
                placeholder="Type your message"
                name="message"
                id="message"
                v-model="message"
                cols="30"
                rows="3"
                spellcheck="false"
              >
                aria-label="Type your message"
              ></textarea
              >
              <!-- @keydown.enter.exact.prevent="sendMessage" -->
            </div>
            <div class="d-flex">
              <div class="flex-grow-1"></div>
              <button
                type="submit"
                :disabled="!message"
                class="btn btn-icon btn-rounded btn-primary mr-2"
                aria-label="Send message"
              >
                <i class="i-Paper-Plane"></i>
              </button>
              <input
                type="file"
                id="fileUpload"
                class="d-none"
                aria-label="Upload file"
              />
              <label
                for="fileUpload"
                class="btn btn-icon btn-rounded btn-outline-primary"
                aria-label="Upload file"
              >
                <i class="i-Add-File"></i>
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
    <b-modal
      id="modal-sm2"
      size="sm"
      title="Change Presence"
      hide-footer
      ref="add-roaster-modal"
    >
      <b-form @submit.prevent="onSubmit">
        <b-form-group
          id="input-group-1"
          label="Roaster Name:"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="roaster.name"
            required
            placeholder="Enter roaster phone number or username in BeeChat"
          ></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary">Add Roaster</b-button>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
// import * as XMPP from "stanza";
// import { client as XMPPClient, xml } from "@xmpp/client";
// import { client, xml } from "@xmpp/client";

export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Chat",
  },
  data() {
    return {
      recentContacts: [],
      search: "",
      isMobile: false,
      message: "",
      client: null,
      messages: [],
      inputMessage: "",
      presenceStatus: "Offline",
      presenceClass: "status-offline",
      xmpp: null,

      roaster: {
        name: "",
        type: "",
      },
    };
  },

  setup() {
    return {};
  },

  methods: {
    notificationToast(vm, append = false, variant = null, msg) {
      vm.$bvToast.toast(`${msg}`, {
        title: `${msg}`,
        autoHideDelay: 5000,
        appendToast: append,
        variant: variant,
      });
    },
    ...mapActions([
      "changeSelectedUser",
      "sendMessage",
      "addRoaster",
      "getRoaster",
    ]),
    onSubmit() {
      this.addRoaster({
        jid: `${this.roaster.name}@localhost`,
        name: this.roaster.name,
        error: (error) => {
          console.log(error);
        },
        success: (success) => {
          console.log(success);
        },
      });
      this.jid = "";
      this.name = "";
    },

    getContactRoaster() {
      this.getRoaster({
        error: (error) => {
          console.log(error);
        },
        success: (success) => {
          this.notificationToast(
            this,
            true,
            "success",
            "Successfully Loaded Roaster List"
          );
          this.$refs["add-roaster-modal"].hide();

          console.log(success);
        },
      });
    },
  },

  computed: {
    ...mapGetters([
      "getContactLists",
      "getRecentUser",
      "getCurrentUser",
      "getSelectedUser",
    ]),

    filterContacts() {
      return this.getContactLists.filter((contact) => {
        return contact.name.toLowerCase().match(this.search.toLowerCase());
      });
    },
  },

  created: function () {
    // this.client = XMPP.createClient({
    //   jid: "admin@localhost",
    //   password: "admin",
  },

  mounted() {
    this.getContactRoaster();
  },
};
</script>

<style></style>
