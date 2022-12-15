const main = async () => {
    const Uniswap = await hre.ethers.getContractFactory("Uniswap");
    const UniswapContract = await Uniswap.deploy();
  
    await UniswapContract.deployed();
  
    console.log("Transactions address: ", UniswapContract.address);
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
  };
  
  runMain();
  