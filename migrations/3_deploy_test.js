const SafeMath = artifacts.require("SafeMath");

async function performMigration(deployer, network, accounts) {
  console.log("network is ", network);
  if(network.includes("development") ||
    network.includes("ganache")
    ){
    //await AddressArray.deployed();
    //await deployer.link(AddressArray, TestAddressList);
    //await deployer.deploy(USDT);
    //await deployer.deploy(StdERC20);
    //await SafeMath.deployed();
   // await deployer.link(SafeMath, TestERC20);
   // await deployer.deploy(TestERC20, "TEST", 18, "TST");
  }
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
