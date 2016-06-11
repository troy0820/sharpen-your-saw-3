const model = {
  attributes: {},

  setAttribute(key, value) {
    this.attributes[key] = value;
  },

  resetAttributes() {
    this.attributes = {};
  },
}

module.exports = model;
