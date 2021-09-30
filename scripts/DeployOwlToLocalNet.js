// scripts/deploy.js
async function main() {
  // We get the contract to deploy
  const Owl = await ethers.getContractFactory("Owl");
  console.log("Deploying Owl...");
  const owl = await Owl.deploy();
  await owl.deployed();
  console.log("owl deployed to:", owl.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
