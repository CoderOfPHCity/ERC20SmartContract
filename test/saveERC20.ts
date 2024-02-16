import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";;
import { expect } from "chai";
import { ethers } from "hardhat";


describe("Testing Todos", function () {
 
 
  async function deployToken() {
    const erc = await ethers.getContractFactory("SaveERC20");
    const token = await erc.deploy("_savingToken");
    return { erc, token };
  }

  //constant
  const title = "Read",
    desc = "I want to read in the evening",
    title2 = "Cooking",
    desc2 = "Will be cooking today";

  describe("Deployment", function () {
    it("Should check if contract was deployed", async function () {
      const { token } = await loadFixture(deployToken);
      expect(token).to.exist;
    });

    it("Should check if a new token is deposited", async function () {
      const { token, erc } = await loadFixture(deployToken);
      const contract = await deployToken();

      return {token, contract, erc};
    
      await token.deposit(ethers.parseUnits("100", 18)); 
      expect(await token.checkContractBalance()).to.equals(1);


      
      // Deposit tokens into the contract
      await token.deposit(ethers.parseUnits("10", 18)); // Deposit 10 tokens
    

      // const tx = await todo.addTodoItem(title, desc);
      // const tx2 = await todo.addTodoItem(title2, desc2);
      // expect(await todo.getTodoLen()).to.equal(2);
    });


  });

  // describe("Checking for Item Removal ", function () {
  //   it("Should check if the remove todo item is correct", async function () {
  //     const { todo } = await loadFixture(deployTodo);

  //     const tx = await todo.addTodoItem(title, desc);
  //     const tx2 = await todo.addTodoItem(title2, desc2);
  //     const del = await todo.removeTodoItem(0);
  //     expect(await todo.getTodoLen()).to.equal(1);
  //   });
  // });

  // describe("Checking for retrieved todos", function () {
  //   it("Should check if the returned todo is correct ", async function () {
  //     const { todo } = await loadFixture(deployTodo);

  //     const tx = await todo.addTodoItem(title, desc);

  //     await todo.addTodoItem(title, desc);

  //     const addedTodoIndex = 0;
  //     const retrievedTodo = await todo.getTodoItem(addedTodoIndex);

  //     expect(retrievedTodo.title).to.equal(title);
  //     expect(retrievedTodo.description).to.equal(desc);
  //     expect(retrievedTodo.isDone).to.equal(false);
  //   });

  //   it("Should retrieve all todos correctly", async function () {
  //     // Load the TodoList contract from the fixture
  //     const { todo } = await loadFixture(deployTodo);

  //     await todo.addTodoItem(title, desc);
  //     await todo.addTodoItem(title2, desc2);

  //     // Get all todos
  //     const allTodos = await todo.getTodos();

  //     // Check if the number of todos is correct
  //     expect(allTodos.length).to.equal(2);

  //     // Check if each todo item has correct values
  //     expect(allTodos[0].title).to.equal(title);
  //     expect(allTodos[0].description).to.equal(desc);
  //     expect(allTodos[0].isDone).to.equal(false); // Assuming the default value is false

  //     expect(allTodos[1].title).to.equal(title2);
  //     expect(allTodos[1].description).to.equal(desc2);
  //     expect(allTodos[1].isDone).to.equal(false); // Assuming the default value is false
  //   });
  // });

  // describe("Checking the Update Title and Description", function () {
  //   it("Should check if the update title was updated", async function () {
  //     const { todo } = await loadFixture(deployTodo);

  //     const tx = await todo.addTodoItem(title, desc);

  //     // Get the index of the added todo item
  //     const addedTodoIndex = 0;
  //     const updatedTitle = "Signor Dev";

  //     //updating the title by index
  //     await todo.updateTodoTitle(updatedTitle, addedTodoIndex);

  //     // Get the todo item after updating
  //     const updatedTodo = await todo.getTodoItem(addedTodoIndex);

  //     expect(updatedTodo.title).to.equal(updatedTitle);
  //   });

  //   it("Should check if the update description was updated", async function () {
  //     const { todo } = await loadFixture(deployTodo);

  //     const tx = await todo.addTodoItem(title, desc);

  //     // Get the index of the added todo item
  //     const addedTodoIndex = 0;
  //     const updatedDesc = "I am not going out today";

  //     //updating the title by index
  //     await todo.updateTodoDesc(updatedDesc, addedTodoIndex);

  //     // Get the todo item after updating
  //     const updatedTodo = await todo.getTodoItem(addedTodoIndex);

  //     expect(updatedTodo.description).to.equal(updatedDesc);
  //   });

  //   it("Should check if the status was updated", async function () {
  //     const { todo } = await loadFixture(deployTodo);

  //     const tx = await todo.addTodoItem(title, desc);

  //     // Get the index of the added todo item
  //     const addedTodoIndex = 0;

  //     //updating the title by index
  //     await todo.updateTodoStatus(addedTodoIndex);

  //     // Get the todo item after updating
  //     const updatedTodo = await todo.getTodoItem(addedTodoIndex);

  //     expect(updatedTodo.isDone).to.equal(true || false);
  //   });
  // });

  // describe("Checking for revert cases in the transaction", function () {
  //   it("Update title should fail on wrong index input", async function () {
  //     const { todo } = await loadFixture(deployTodo);
  //     const tx = todo.updateTodoTitle("Working", 3);
  //     await expect(tx).to.be.revertedWith("You entered an incorrect value");
  //   });

  //   it("Update description should fail on wrong index input", async function () {
  //     const { todo } = await loadFixture(deployTodo);
  //     const tx = todo.updateTodoDesc("I will work today", 3);
  //     await expect(tx).to.be.revertedWith("You entered an incorrect value");
  //   });

  //   it("Update status should fail on wrong index input", async function () {
  //     const { todo } = await loadFixture(deployTodo);
  //     const tx = todo.updateTodoStatus(3);
  //     await expect(tx).to.be.revertedWith("You entered an incorrect value");
  //   });

  //   it("Remove todo item by index should fail on wrong index input", async function () {
  //     const { todo } = await loadFixture(deployTodo);
  //     const tx = todo.removeTodoItem(4);
  //     await expect(tx).to.be.revertedWith("You entered an incorrect value");
  //   });
  });