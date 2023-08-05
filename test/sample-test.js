const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Vote Cereal Once", function () {
  it("Should increase votes for cereal by 1", async function () {
    const Vote = await ethers.getContractFactory("Vote");
    const vote = await Vote.deploy();
    await vote.deployed();

    expect(await vote.getCerealVotes()).to.equal(0);

    const voteCerealTx = await vote.voteCereal();

    // wait until the transaction is mined
    await voteCerealTx.wait();

    expect(await vote.getCerealVotes()).to.equal(1);
  });
});

describe("Vote Milk Once", function () {
  it("Should increase votes for milk by 1", async function () {
    const Vote = await ethers.getContractFactory("Vote");
    const vote = await Vote.deploy();
    await vote.deployed();

    expect(await vote.getMilkVotes()).to.equal(0);

    const voteMilkTx = await vote.voteMilk();

    // wait until the transaction is mined
    await voteMilkTx.wait();

    expect(await vote.getMilkVotes()).to.equal(1);
  });
});
