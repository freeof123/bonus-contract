const SafeMath = artifacts.require("SafeMath");
const ERC20Bonus = artifacts.require("ERC20Bonus");


async function performMigration(deployer, network, accounts) {
  //if(network.includes("main")){
    bank = "0x21A3dbeE594a3419D6037D6D8Cee0B1E10Bf345C";
    rds = "0xc06a9758d89289d72e09e412bB51913206A183fE";
    //usdt = "0xdAC17F958D2ee523a2206206994597C13D831ec7";
    snapshot = 1234567;
    start = 1234568;
    end = 2000000;
    bonus = 100000000000;
  //}

  await deployer.link(SafeMath, ERC20Bonus);
  await deployer.deploy(ERC20Bonus, bank, rds, snapshot, start, end, bonus);
  h = await ERC20Bonus.deployed();
  console.log("ERC20Bonus: ", h.address);
}

module.exports = function(deployer, network, accounts){
deployer
    .then(function() {
      return performMigration(deployer, network, accounts)
    })
    .catch(error => {
      console.log(error)
      process.exit(1)
    })
};
