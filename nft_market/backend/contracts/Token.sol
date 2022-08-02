// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.4;

contract Token {
    // トークン名と識別子
    string public name = "My Hardhat Token";
    string public symbol = "MHT";
    // トークンの量
    uint256 public totalSupply = 1000000;
    // コントラクトのオーナーのアドレス
    address public owner;
    // 各アカウント残高を保存しておく領域
    mapping(address => uint256) balances;

    // `constructor`はコントラクトの作成時に1回だけ実行されます。
    constructor() {
        // ここでの`msg.sender`はこのコントラクトをデプロイしたアドレス
        balances[msg.sender] = totalSupply;
        owner = msg.sender;
    }

    // 金額を転送する関数
    function transfer(address to, uint256 amount) external {
        require(balances[msg.sender] >= amount, "Not enough tokens");

        balances[msg.sender] -= amount;
        balances[to] += amount;
    }

    // アカウントのトークン残高を取得するための読み取り専用関数
    function balanceOf(address account) external view returns (uint256) {
        return balances[account];
    }
}