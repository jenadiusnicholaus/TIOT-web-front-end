/* eslint-disable no-unused-vars */
import { client, xml, jid as createJid } from "@xmpp/client";
import { nanoid } from "nanoid";

export default {
  state: {
    xmpp: null,
    jid: null,
    fullJid: null,
    nick: null,
    isAnonymous: true,
    presence: "offline",
    transports: window.config.transports,
    resource: window.config.resource,
    defaultDomain: window.config.defaultDomain,
    defaultMuc: window.config.defaultMuc,
    connectTimeout: window.config.connectTimeout,
    context: null,
    roaster: [],
  },

  getters: {
    getXmpp: (state) => state.xmpp,
    getJid: (state) => state.jid,
    getFullJid: (state) => state.fullJid,
    getNick: (state) => state.nick,
    getIsAnonymous: (state) => state.isAnonymous,
    getPresence: (state) => state.presence,
    getTransports: (state) => state.transports,
    getResource: (state) => state.resource,
    getDefaultDomain: (state) => state.defaultDomain,
    getDefaultMuc: (state) => state.defaultMuc,
    getConnectTimeout: (state) => state.connectTimeout,
    getContext: (state) => state.context,
    getRoaster: (state) => state.roaster,
  },

  mutations: {
    setXmpp(state, xmpp) {
      state.xmpp = xmpp;
    },
    setJid(state, jid) {
      state.jid = jid;
    },
    setFullJid(state, fullJid) {
      state.fullJid = fullJid;
    },
    setNick(state, nick) {
      state.nick = nick;
    },
    setIsAnonymous(state, isAnonymous) {
      state.isAnonymous = isAnonymous;
    },
    setPresence(state, presence) {
      state.presence = presence;
    },
    setContext(state, context) {
      state.context = context;
    },
    setRoaster(state, roaster) {
      state.roaster = roaster;
    },
  },
  actions: {
    async createXmppClient(
      { commit, state },
      { jid, password, domain, resource, context }
    ) {
      console.log("createXmppClient");

      console.log(jid, password, domain, context);

      // Check if connection details exist in localStorage
      const storedDetails = sessionStorage.getItem("xmppConnectionDetails");
      let xmpp;
      let details;
      if (storedDetails) {
        // Use stored details to create client
        xmpp = client(JSON.parse(storedDetails));
      } else {
        // Create new client and store details in localStorage
        this.details = {
          service:
            state.transports?.websocket ?? "ws://localhost:5280/websocket/",
          domain: domain || state.defaultDomain,
          resource: (state.resource || "Bee Chat") + " " + Date.now(),
          hostname: domain || "localhost",
          username: jid,
          password: password,
        };
        xmpp = client(this.details);
        sessionStorage.setItem(
          "xmppConnectionDetails",
          JSON.stringify(this.details)
        );
      }
      //   commit("setXmpp", xmpp);

      xmpp.on("error", (error) => {
        console.error("error", error);
      });

      xmpp.on("message", (message) => {
        console.log("message", message);
      });

      xmpp.on("offline", () => {
        console.log("offline");
        commit("setPresence", "offline");
      });

      xmpp.on("online", async (address) => {
        console.log("online", address);
        commit("setPresence", "online");
        commit("setXmpp", this.xmpp);
        // commit("setFullJid", jid.full);

        // commit("setNick", jid.user);
        await xmpp.send(xml("presence"));
      });

      xmpp.on("message", (stanza, presence) => {
        console.log("message", stanza, presence);
      });

      xmpp.on("authenticated", (jid) => {
        if (!this.isAnonymous) {
          sessionStorage.setItem("barejid", jid.bare);
          sessionStorage.setItem("jid", this.jid);
          sessionStorage.setItem("auth", true);
        }
        commit("setXmpp", xmpp);
        commit("setFullJid", jid.full);
        commit("setNick", jid.user);
      });

      xmpp.on("presence", (presence) => {
        const { from, type } = presence;
        console.log(`Presence update from ${from}: ${type}`);
      });

      xmpp.start().catch(console.error);
    },

    updatePresence({ commit, state }, presence) {
      try {
        console.log("updatePresence", presence);
        state?.xmpp?.send(xml("presence", { type: presence }));
        commit("setPresence", presence);
      } catch (error) {
        console.error("Failed to update presence", error);
      }
    },
  },
};
