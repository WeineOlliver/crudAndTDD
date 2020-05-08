const bcrypt = require('bcryptjs');

const { User } = require('../../src/models');
const truncate = require('../utils/truncate');

describe('User', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('should encrypt user password', async () => {
    const user = await User.create({
      name: 'Weine',
      email: 'weineolliver@gmail.com',
      password: '123556',
    });

    const hash = await bcrypt.hash('123556', 8);
    const compareHash = await bcrypt.compare('123556', user.password_hash);

    expect(compareHash).toBe(true);
  });
});
