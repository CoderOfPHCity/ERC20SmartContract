// // SPDX-License-Identifier: MIT
// pragma solidity ^0.8;
// import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
// import "@openzeppelin/contracts/access/Ownable.sol";

// contract DanielToken is ERC20, Ownable {
//     constructor(
//         address initialOwner
//     ) ERC20("DanielToken", "DNT") Ownable(initialOwner) {
//         _mint(msg.sender, 2000000000000000000000000000000);
//     }

//     function mint(address to, uint256 amount) public onlyOwner {
//         _mint(to, amount);
//     }
// }