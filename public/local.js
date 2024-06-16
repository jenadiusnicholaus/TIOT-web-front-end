// eslint-disable-next-line no-unused-vars, no-var
window.config = {
  name: "Bee Chat",
  transports: {
    websocket: "ws://localhost:5280/websocket/",
  },
  hasGuestAccess: true,
  hasRegisteredAccess: true,
  anonymousHost: null,
  // anonymousHost: 'anon.domain-xmpp.ltd',
  isTransportsUserAllowed: false,
  hasHttpAutoDiscovery: false,
  resource: "Bee Chat",
  defaultDomain: "localhost",
  defaultMuc: null,
  // defaultMuc: 'conference.domain-xmpp.ltd',
  isStylingDisabled: false,
  hasSendingEnterKey: false,
  connectTimeout: 5000,
  pinnedMucs: [],
  logoUrl: "",
  guestDescription: "",
};
