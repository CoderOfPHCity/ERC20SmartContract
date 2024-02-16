import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";;
import { expect } from "chai";
import { ethers } from "hardhat";
import { SaveERC20 } from "../typechain-types";


describe("Testing Todos", function () {
 
 
  async function deployToken() {
    const erc = await ethers.getContractFactory("SaveERC20");
    const token = await erc.deploy("_savingToken");
    return { erc, token };
  }


  describe("Deployment", function () {
    it("Should check if contract was deployed", async function () {
      const { token } = await loadFixture(deployToken);
      expect(token).to.exist;
    });

    it("Should check if a new token is deposited", async function () {
      const { token, erc, } = await loadFixture(deployToken);
      const contract = await deployToken();
      const contractBalance = await token.checkContractBalance();

      expect(contractBalance).to.equals(0);

    
    });

  });
});