// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Storage {
    uint8 public a = 7;
    uint16 public b = 10;
    address public c = 0x93304E00B9650A9DfDcf3c25a8AE66c44605D2FF;
    bool d = true;
    uint64 public e = 15;
    //32 bytes slot 0

    //0x0f0193304e00b9650a9dfdcf3c25a8ae66c44605d2ff000a07


    uint256 public f = 200;       //32 bytes slot 1
    uint8 public g = 40;            //32 bytes slot 2
    uint256 public h = 789;          //32 bytes slot 3
}
