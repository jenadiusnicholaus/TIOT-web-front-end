/* eslint-disable no-unused-vars */
import { client, xml, jid as createJid } from "@xmpp/client";
// import defaultAvatar from "../assets/defaultAvatar";
// import { xml } from "@xmpp/client";
import { nanoid } from "nanoid";
import store from "../modules/xmppStore";

const transports = window.config.transports;
const resource = window.config.resource;
const defaultDomain = window.config.defaultDomain;
const defaultMuc = window.config.defaultMuc;
const connectTimeout = window.config.connectTimeout;

function logError(error, defaultLevel) {
  const args = Array.prototype.slice.call(arguments, 2);
  if (["XMPPError", "StanzaError"].includes(error.name)) {
    console.warn(error.name, ...args.filter((arg) => !(arg instanceof Error)));
    return;
  }
  if (defaultLevel === "error") {
    console.error(...args);
  } else {
    console.warn(...args);
  }
}

export default {
  jid: null,
  fullJid: null,
  context: null,
  client: null,
  nick: null,
  isAnonymous: true,
  defaultDomain,
  defaultMuc,

  // create XMPP client with credentials and context
  async create(jid, password, domain, transportsUser, context) {
    // clear previous session
    this.nick = null;
    this.fullJid = null;
    this.jid = null;
    this.context = context;
    // this.disconnect();

    // handle anonymous authentication
    if (jid) {
      this.isAnonymous = false;
    } else {
      this.isAnonymous = true;
      jid = "anon";
    }

    // set domain from user jid or by default
    const jidParts = jid.split("@");
    if (jidParts.length > 1) {
      jid = jidParts[0];
      domain = jidParts[1];
    }
    if (!domain) {
      domain = defaultDomain;
    }

    this.jid = jid;

    // use transports if user provided them
    if (transportsUser.websocket) {
      transports.websocket = transportsUser.websocket;
    }

    const xmpp = client({
      service: transports.websocket,
      domain: "localhost",
      resource: (resource || "Bee Chat") + " " + nanoid(5),
      hostname: "localhost",
      username: jid,
      password: password,
    });

    xmpp.on("error", (error) => {
      logError(error, "error");
    });

    console.log(xmpp);

    this.client = xmpp;
    this.fullJid = createJid(jid, domain);
    this.nick = jid;
    this.context = context;
    this.transports = transports;
    this.connectTimeout = connectTimeout;

    console.log("XMPP");

    xmpp.on("open", () => {
      console.log("✅", "open");
    });

    xmpp.on("close", () => {
      console.log("⏹", "close");
    });

    xmpp.on("message", (message) => {
      console.log("✅", "message", message);
    });

    xmpp.on("error", (err) => {
      console.error("❌", err.toString());
    });

    xmpp.on("offline", () => {
      console.log("⏹", "offline");
      // presenceStatus.textContent = "Offline";
      // presenceStatus.className = "status-offline";
      context.$store.dispatch("changePresence", "offline");
    });

    xmpp.on("online", async (address) => {
      console.log("✅", "online as", address.toString());
      context.$store.dispatch("changePresence", "online");

      // presenceStatus.textContent = "Online";
      // presenceStatus.className = "status-online";

      // Send initial presence
      await xmpp.send(xml("presence"));
    });

    xmpp.start().catch(console.error);
  },
};
