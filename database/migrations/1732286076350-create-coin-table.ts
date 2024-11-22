import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createCoinsTable1732286076350 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'coins',
        columns: [
          {
            name: 'id',
            type: 'int4',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'created_on',
            type: 'timestamptz',
            default: 'now()',
          },
          {
            name: 'updated_on',
            type: 'timestamptz',
            default: 'now()',
          },
          {
            name: 'symbol',
            type: 'varchar',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'image',
            type: 'varchar',
          },
          {
            name: 'active',
            type: 'boolean',
            default: true,
          },
          {
            name: 'depositable',
            type: 'boolean',
            default: true,
          },
          {
            name: 'withdrawable',
            type: 'boolean',
            default: true,
          },
          {
            name: 'exchangeable',
            type: 'boolean',
            default: true,
          },
        ],
      }),
    );

    // insert default coins
    await queryRunner.query(`INSERT INTO coins (name, symbol, image) VALUES ('Avalanche', 'AVAX', 'https://coin-images.coingecko.com/coins/images/12559/large/Avalanche_Circle_RedWhite_Trans.png?1696512369');
      INSERT INTO coins (name, symbol, image) VALUES ('Bitcoin', 'BTC', 'https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400');
      INSERT INTO coins (name, symbol, image) VALUES ('TRON', 'TRX', 'https://coin-images.coingecko.com/coins/images/1094/large/tron-logo.png?1696502193');
      INSERT INTO coins (name, symbol, image) VALUES ('binancecoin', 'BNB', 'https://coin-images.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1696501970');
      INSERT INTO coins (name, symbol, image) VALUES ('Cosmos Hub', 'ATOM', 'https://coin-images.coingecko.com/coins/images/1481/large/cosmos_hub.png?1696502525');
      INSERT INTO coins (name, symbol, image) VALUES ('POL (ex-MATIC)', 'POL', 'https://coin-images.coingecko.com/coins/images/32440/large/polygon.png?1698233684');
      INSERT INTO coins (name, symbol, image) VALUES ('Chainlink', 'LINK', 'https://coin-images.coingecko.com/coins/images/877/large/chainlink-new-logo.png?1696502009');
      INSERT INTO coins (name, symbol, image) VALUES ('@DOGE', 'DOGE', 'https://coin-images.coingecko.com/coins/images/51625/large/_doge.jpg?1731661012');
      INSERT INTO coins (name, symbol, image) VALUES ('EOS', 'EOS', 'https://coin-images.coingecko.com/coins/images/738/large/CG_EOS_Icon.png?1731705232');
      INSERT INTO coins (name, symbol, image) VALUES ('Polkadot', 'DOT', 'https://coin-images.coingecko.com/coins/images/12171/large/polkadot.png?1696512008');
      INSERT INTO coins (name, symbol, image) VALUES ('xrp', 'XRP', 'https://coin-images.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1696501442');
      INSERT INTO coins (name, symbol, image) VALUES ('Bitcoin Cash', 'BCH', 'https://coin-images.coingecko.com/coins/images/780/large/bitcoin-cash-circle.png?1696501932');
      INSERT INTO coins (name, symbol, image) VALUES ('Litecoin', 'LTC', 'https://coin-images.coingecko.com/coins/images/2/large/litecoin.png?1696501400');
      INSERT INTO coins (name, symbol, image) VALUES ('Arbitrum', 'ARB', 'https://coin-images.coingecko.com/coins/images/16547/large/arb.jpg?1721358242');
      INSERT INTO coins (name, symbol, image) VALUES ('ethereum', 'ETH', 'https://coin-images.coingecko.com/coins/images/279/large/ethereum.png?1696501628');
      INSERT INTO coins (name, symbol, image) VALUES ('Cardano', 'ADA', 'https://coin-images.coingecko.com/coins/images/975/large/cardano.png?1696502090');
      INSERT INTO coins (name, symbol, image) VALUES ('Monero', 'XMR', 'https://coin-images.coingecko.com/coins/images/69/large/monero_logo.png?1696501460');
      INSERT INTO coins (name, symbol, image) VALUES ('Solana', 'SOL', 'https://coin-images.coingecko.com/coins/images/4128/large/solana.png?1718769756');
      INSERT INTO coins (name, symbol, image) VALUES ('NEAR Protocol', 'NEAR', 'https://coin-images.coingecko.com/coins/images/10365/large/near.jpg?1696510367');`);
  }
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('coins', true);
  }
}
