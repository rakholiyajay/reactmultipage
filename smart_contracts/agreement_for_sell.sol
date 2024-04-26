pragma solidity ^0.8.0;

contract AgreementToSell {
    address public firstParty;
    address public secondParty;
    uint256 public saleConsideration;
    uint256 public advanceReceived;
    uint256 public balanceAmount;
    uint256 public registrationDate;
    bool public possessionDelivered;

    constructor(
        address _secondParty,
        uint256 _saleConsideration,
        uint256 _advanceReceived
    ) {
        firstParty = msg.sender;
        secondParty = _secondParty;
        saleConsideration = _saleConsideration;
        advanceReceived = _advanceReceived;
        balanceAmount = _saleConsideration - _advanceReceived;
        possessionDelivered = false;
    }

    function deliverPossession() external {
        require(msg.sender == firstParty, "Only first party can deliver possession");
        require(!possessionDelivered, "Possession already delivered");
        possessionDelivered = true;
    }

    function registerSaleDeed(uint256 _registrationDate) external {
        require(msg.sender == firstParty || msg.sender == secondParty, "Unauthorized");
        require(possessionDelivered, "Possession not yet delivered");
        require(block.timestamp <= _registrationDate, "Invalid registration date");
        registrationDate = _registrationDate;
    }

    function executeSale() external {
        require(msg.sender == firstParty || msg.sender == secondParty, "Unauthorized");
        require(possessionDelivered, "Possession not yet delivered");
        require(registrationDate != 0, "Sale deed not yet registered");
        require(block.timestamp >= registrationDate, "Registration date not yet reached");

        // Execute sale by transferring ownership of the contract to the second party
        secondParty = firstParty;
        firstParty = address(0);
    }
}
