// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.11;
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "hardhat/console.sol";

contract MyNFT is ERC721URIStorage {
    // OpenZeppelin が tokenIds を簡単に追跡するために提供するライブラリを呼び出しています
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    string[14] gibier = [
        "https://jsonkeeper.com/b/CN15",
        "https://jsonkeeper.com/b/JTDK",
        "https://jsonkeeper.com/b/GY92",
        "https://jsonkeeper.com/b/6AMY",
        "https://jsonkeeper.com/b/Y4K6",
        "https://jsonkeeper.com/b/GP2S",
        "https://jsonkeeper.com/b/HVS9",
        "https://jsonkeeper.com/b/FPNQ",
        "https://jsonkeeper.com/b/0HMS",
        "https://jsonkeeper.com/b/8MUG",
        "https://jsonkeeper.com/b/KAVO",
        "https://jsonkeeper.com/b/VBB2",
        "https://jsonkeeper.com/b/O9A3",
        "https://jsonkeeper.com/b/5VTJ"
        
    ];

    /*string gibier1 = "https://jsonkeeper.com/b/GY92";
    string gibier2 = "https://jsonkeeper.com/b/6AMY";
    string gibier3 = "https://jsonkeeper.com/b/Y4K6";
    string gibier4 = "https://jsonkeeper.com/b/GP2S";
    string gibier5 = "https://jsonkeeper.com/b/HVS9";
    string gibier6 = "https://jsonkeeper.com/b/FPNQ";
    string gibier7 = "https://jsonkeeper.com/b/0HMS";
    string gibier8 = "https://jsonkeeper.com/b/8MUG";
    string gibier9 = "https://jsonkeeper.com/b/KAVO";
    string gibier10 = "https://jsonkeeper.com/b/VBB2";
    string gibier0 = "https://jsonkeeper.com/b/CN15";
    string gibier11 = "https://jsonkeeper.com/b/O9A3";
    string gibier12 = "https://jsonkeeper.com/b/5VTJ";
    */

    // _tokenIdsを初期化（_tokenIds = 0）
    constructor() ERC721("Ticket", "Ticket") {
        console.log("This is my ticket NFT");
    }

    function createToken() public payable virtual {
        //(bool success, ) = (msg.sender).call{value: 1 ether}("");
        //require(success, "Failed to withdraw money from contract.");
        uint256 newItemId = _tokenIds.current();
        if (newItemId <= 14) {
            _safeMint(msg.sender, newItemId);
            _setTokenURI(newItemId, gibier[newItemId]);
            //setApprovalForAll(contractAddress, true);
            _tokenIds.increment();
            console.log("Address is:", msg.sender);
            console.log("ItemID:", newItemId);
            //return newItemId;
        }
    }

    function withDraw() public{
        uint256 prizeAmount = 0.016 ether;
        (bool success, ) = (msg.sender).call{value: prizeAmount}("");
    }
}
