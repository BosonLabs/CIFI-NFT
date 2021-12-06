const approvalProgramSourceInitial = `#pragma version 4
  txn ApplicationID
  int 0
  ==
  bnz main_l74
  txn CloseRemainderTo
  global ZeroAddress
  ==
  txn RekeyTo
  global ZeroAddress
  ==
  &&
  bnz main_l3
  err
  main_l3:
  txn OnCompletion
  int OptIn
  ==
  bnz main_l71
  txn OnCompletion
  int UpdateApplication
  int DeleteApplication
  ||
  ==
  bnz main_l70
  txn OnCompletion
  int CloseOut
  ==
  bnz main_l67
  txna ApplicationArgs 0
  byte "B"
  ==
  bnz main_l52
  txna ApplicationArgs 0
  byte "S"
  ==
  bnz main_l39
  txna ApplicationArgs 0
  byte "BN"
  ==
  bnz main_l28
  txna ApplicationArgs 0
  byte "SN"
  ==
  bnz main_l15
  txna ApplicationArgs 0
  byte "C"
  ==
  bnz main_l12
  err
  main_l12:
  txn Sender
  byte "C"
  app_global_get
  ==
  byte "E"
  app_global_get
  global ZeroAddress
  ==
  &&
  bnz main_l14
  err
  main_l14:
  byte "E"
  txna Accounts 1
  app_global_put
  int 1
  return
  main_l15:
  int 1
  byte "B"
  app_local_get
  int 0
  !=
  gtxn 2 AssetAmount
  int 1
  byte "B"
  app_local_get
  ==
  &&
  gtxn 2 Sender
  byte "E"
  app_global_get
  ==
  &&
  gtxn 1 Receiver
  byte "E"
  app_global_get
  ==
  &&
  bnz main_l17
  err
  main_l17:
  int 1
  byte "B"
  int 0
  app_local_put
  byte "B"
  byte "B"
  app_global_get
  int 1
  -
  app_global_put
  gtxn 3 AssetReceiver
  txna Accounts 1
  ==
  bnz main_l19
  err
  main_l19:
  byte "O"
  app_global_get
  global ZeroAddress
  ==
  bnz main_l25
  byte "O"
  app_global_get
  txn Sender
  ==
  bnz main_l22
  int 0
  return
  main_l22:
  gtxn 3 Sender
  byte "E"
  app_global_get
  ==
  bnz main_l24
  err
  main_l24:
  byte "A"
  int 0
  app_global_put
  byte "O"
  global ZeroAddress
  app_global_put
  int 1
  return
  main_l25:
  gtxn 3 Sender
  txn Sender
  ==
  bnz main_l27
  err
  main_l27:
  int 1
  return
  main_l28:
  byte "A"
  app_global_get
  int 0
  !=
  byte "O"
  app_global_get
  global ZeroAddress
  !=
  &&
  bnz main_l30
  err
  main_l30:
  int 0
  byte "B"
  app_local_get
  int 0
  !=
  bnz main_l38
  main_l31:
  gtxn 2 AssetReceiver
  byte "E"
  app_global_get
  ==
  bnz main_l37
  main_l32:
  gtxn 2 Sender
  byte "E"
  app_global_get
  ==
  bnz main_l36
  main_l33:
  int 0
  byte "B"
  app_local_get
  byte "A"
  app_global_get
  ==
  gtxn 1 Receiver
  byte "E"
  app_global_get
  ==
  &&
  gtxn 3 Sender
  byte "E"
  app_global_get
  ==
  &&
  gtxn 4 AssetReceiver
  byte "O"
  app_global_get
  ==
  &&
  gtxn 4 Sender
  byte "E"
  app_global_get
  ==
  &&
  gtxn 4 AssetAmount
  byte "A"
  app_global_get
  ==
  &&
  bnz main_l35
  err
  main_l35:
  byte "A"
  int 0
  app_global_put
  byte "O"
  global ZeroAddress
  app_global_put
  int 0
  byte "B"
  int 0
  app_local_put
  int 1
  return
  main_l36:
  int 0
  byte "B"
  int 0
  byte "B"
  app_local_get
  gtxn 2 AssetAmount
  -
  app_local_put
  b main_l33
  main_l37:
  int 0
  byte "B"
  int 0
  byte "B"
  app_local_get
  gtxn 2 AssetAmount
  +
  app_local_put
  b main_l32
  main_l38:
  byte "B"
  byte "B"
  app_global_get
  int 1
  -
  app_global_put
  b main_l31
  main_l39:
  global GroupSize
  int 2
  ==
  bnz main_l49
  main_l40:
  txna ApplicationArgs 1
  btoi
  byte "A"
  app_global_get
  !=
  byte "O"
  app_global_get
  txn Sender
  ==
  &&
  bnz main_l42
  err
  main_l42:
  byte "A"
  txna ApplicationArgs 1
  btoi
  app_global_put
  global GroupSize
  int 3
  ==
  bnz main_l46
  byte "A"
  app_global_get
  int 0
  !=
  bnz main_l45
  err
  main_l45:
  int 1
  return
  main_l46:
  gtxn 2 Sender
  byte "E"
  app_global_get
  ==
  bnz main_l48
  err
  main_l48:
  byte "O"
  global ZeroAddress
  app_global_put
  int 1
  return
  main_l49:
  byte "O"
  app_global_get
  global ZeroAddress
  ==
  byte "A"
  app_global_get
  int 0
  ==
  &&
  gtxn 1 AssetReceiver
  byte "E"
  app_global_get
  ==
  &&
  gtxn 1 TypeEnum
  int axfer
  ==
  &&
  gtxn 1 XferAsset
  byte "N"
  app_global_get
  ==
  &&
  gtxn 1 AssetAmount
  int 1
  ==
  &&
  gtxn 1 Sender
  gtxn 0 Sender
  ==
  &&
  bnz main_l51
  err
  main_l51:
  byte "O"
  txn Sender
  app_global_put
  b main_l40
  main_l52:
  int 0
  store 0
  int 0
  byte "B"
  app_local_get
  store 1
  global GroupSize
  int 2
  ==
  bnz main_l64
  main_l53:
  global GroupSize
  int 3
  ==
  bnz main_l61
  main_l54:
  load 0
  int 1
  ==
  bnz main_l56
  err
  main_l56:
  int 0
  byte "B"
  app_local_get
  int 0
  !=
  load 1
  int 0
  ==
  &&
  bnz main_l60
  main_l57:
  int 0
  byte "B"
  app_local_get
  int 0
  ==
  load 1
  int 0
  !=
  &&
  bnz main_l59
  main_l58:
  int 1
  return
  main_l59:
  byte "B"
  byte "B"
  app_global_get
  int 1
  -
  app_global_put
  b main_l58
  main_l60:
  byte "B"
  byte "B"
  app_global_get
  int 1
  +
  app_global_put
  b main_l57
  main_l61:
  gtxn 2 Sender
  byte "E"
  app_global_get
  ==
  gtxn 1 Receiver
  byte "E"
  app_global_get
  ==
  &&
  gtxn 2 AssetAmount
  int 0
  !=
  &&
  bnz main_l63
  err
  main_l63:
  int 0
  byte "B"
  int 0
  byte "B"
  app_local_get
  gtxn 2 AssetAmount
  -
  app_local_put
  int 1
  store 0
  b main_l54
  main_l64:
  gtxn 1 AssetReceiver
  byte "E"
  app_global_get
  ==
  gtxn 1 Sender
  gtxn 0 Sender
  ==
  &&
  gtxn 1 TypeEnum
  int axfer
  ==
  &&
  gtxn 1 XferAsset
  byte "U"
  app_global_get
  ==
  &&
  bnz main_l66
  err
  main_l66:
  int 0
  byte "B"
  int 0
  byte "B"
  app_local_get
  gtxn 1 AssetAmount
  +
  app_local_put
  int 1
  store 0
  b main_l53
  main_l67:
  int 0
  byte "B"
  app_local_get
  int 0
  ==
  bnz main_l69
  err
  main_l69:
  int 1
  return
  main_l70:
  int 0
  return
  main_l71:
  global GroupSize
  int 1
  ==
  bnz main_l73
  err
  main_l73:
  int 0
  byte "B"
  int 0
  app_local_put
  int 1
  return
  main_l74:
  byte "U"
  txna ApplicationArgs 0
  btoi
  app_global_put
  byte "N"
  txna ApplicationArgs 1
  btoi
  app_global_put
  byte "O"
  global ZeroAddress
  app_global_put
  byte "C"
  txna Accounts 1
  app_global_put
  byte "E"
  global ZeroAddress
  app_global_put
  byte "A"
  int 0
  app_global_put
  byte "B"
  int 0
  app_global_put
  int 1
  return
  `;
export default approvalProgramSourceInitial;