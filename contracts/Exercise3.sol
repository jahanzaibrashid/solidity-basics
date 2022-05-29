//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Exercise3 {
  enum user{allowed,not_allowed,wait} // assind 0= allowed, 1= not_allowed etc

  user public u1 =  user.allowed;
}