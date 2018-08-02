const Base = require('./base.js');

module.exports = class extends Base {
  async indexAction() {
    const user = this.model('Persons')
    const data = await user.select();
    console.log(data)
    return this.success(data);
  }
};
