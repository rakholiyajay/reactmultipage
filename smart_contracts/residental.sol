pragma solidity ^0.8.0;

contract RentalAgreement {
    address public lessor;
    address public lessee;
    uint256 public monthlyRent;
    uint256 public leaseStartDate;
    uint256 public leaseTerm;
    uint256 public rentalDeposit;
    uint256 public startMeterReading;

    enum PropertyType { IndependentHouse, Apartment, FarmHouse, ResidentialProperty }
    PropertyType public propertyType;
    uint256 public bedrooms;
    uint256 public bathrooms;
    uint256 public carParks;
    uint256 public squareFeet;

    enum PaymentStatus { Paid, Unpaid }

    PaymentStatus public rentStatus;

    modifier onlyLessor() {
        require(msg.sender == lessor, "Only lessor can perform this action");
        _;
    }

    modifier onlyLessee() {
        require(msg.sender == lessee, "Only lessee can perform this action");
        _;
    }

    constructor(
        address _lessee,
        uint256 _monthlyRent,
        uint256 _leaseStartDate,
        uint256 _leaseTerm,
        uint256 _rentalDeposit,
        uint256 _startMeterReading,
        PropertyType _propertyType,
        uint256 _bedrooms,
        uint256 _bathrooms,
        uint256 _carParks,
        uint256 _squareFeet
    ) {
        lessor = msg.sender;
        lessee = _lessee;
        monthlyRent = _monthlyRent;
        leaseStartDate = _leaseStartDate;
        leaseTerm = _leaseTerm;
        rentalDeposit = _rentalDeposit;
        startMeterReading = _startMeterReading;
        propertyType = _propertyType;
        bedrooms = _bedrooms;
        bathrooms = _bathrooms;
        carParks = _carParks;
        squareFeet = _squareFeet;
    }

    function payRent() external onlyLessee payable {
        require(msg.value == monthlyRent, "Incorrect rent amount");
        rentStatus = PaymentStatus.Paid;
    }

    function terminateLease() external onlyLessee {
        require(block.timestamp >= leaseStartDate + (leaseTerm * 30 days), "Lease term not completed");
        selfdestruct(payable(lessee));
    }

    function refundDeposit() external onlyLessor {
        require(rentStatus == PaymentStatus.Paid, "Rent not paid");
        payable(lessee).transfer(rentalDeposit);
    }
}
