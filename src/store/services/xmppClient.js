/* eslint-disable no-unused-vars */
import { client, xml, jid as createJid } from "@xmpp/client";
import XMPPError from "@xmpp/error";
import { nanoid } from "nanoid";

const hasDebug = true;
const hasChatState = true;

let xmppClient = null;
let discoInfoCache = [];

class XmppClient {
  constructor(config) {
    if (xmppClient) {
      xmppClient.disconnect();
    }
    this.config = config;
    // declare custom events listeners
    this.callbacks = {
      chat: [],
      groupchat: [],
      messageSent: [],
      messageSentError: [],
      messageRetracted: [],
      presence: [],
      authenticated: [],
      mucCreated: [],
      chatState: [],
      subjectChange: [],
    };
    this.jid = {};
    this.uploadService = null;
    this.xmpp = client({
      // service: config.service || 'ws://localhost:5280/websocket/',
      service: "ws://localhost:5280/websocket/",
      domain: config.domain || "localhost",
      resource: (config.resource || "Web XMPP") + " " + nanoid(5),
      username: config.jid,
      password: config.password,
    });
    xmppClient = this;
    // default events listeners
    if (hasDebug) {
      this.xmpp.on("stanza", (stanza) => console.debug("0-stanza", stanza));
      this.xmpp.on("error", (error) => console.debug("0-error", error));
      this.xmpp.on("status", (status) => console.debug("0-status", status));
    }
    this.xmpp.on("stanza", this.parseStanza);
  }

  parseJid(jid) {
    let _jid = jid;
    if (typeof jid === "string") {
      _jid = createJid(jid);
    }
    return {
      resource: _jid.getResource(),
      local: _jid.getLocal(),
      domain: _jid.getDomain(),
      bare: _jid.bare().toString(),
      full: _jid.toString(),
    };
  }

  parseStanza(stanza) {
    console.log("1-stanza", stanza);
  }

  parseMessage(stanza) {
    console.log("2-stanza", stanza);
  }

  async connect() {
    if (this.xmpp.status === "offline") {
      this.jid = this.parseJid(await this.xmpp.start());
      xmppClient.callbacks.authenticated.forEach((callback) =>
        callback(this.jid)
      );
    }
    return this.jid;
  }

  async disconnect() {
    this.xmpp.stop();
  }
}

export { XmppClient };
