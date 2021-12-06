                    const data = `#pragma version 4
                    gtxn 0 ApplicationID
                    int appid                    
                    ==
                    gtxn 0 TypeEnum
                    int appl
                    ==
                    &&
                    txn CloseRemainderTo
                    global ZeroAddress
                    ==
                    &&
                    txn RekeyTo
                    global ZeroAddress
                    ==
                    &&
                    bnz main_l2
                    err
                    main_l2:
                    gtxna 0 ApplicationArgs 0
                    byte "S"
                    ==
                    bnz main_l44
                    gtxna 0 ApplicationArgs 0
                    byte "B"
                    ==
                    bnz main_l41
                    gtxna 0 ApplicationArgs 0
                    byte "BN"
                    ==
                    bnz main_l24
                    gtxna 0 ApplicationArgs 0
                    byte "SN"
                    ==
                    bnz main_l9
                    gtxna 0 ApplicationArgs 0
                    byte "C"
                    ==
                    bnz main_l8
                    err
                    main_l8:
                    int 1
                    return
                    main_l9:
                    global GroupSize
                    int 4
                    ==
                    gtxn 2 TypeEnum
                    int axfer
                    ==
                    &&
                    gtxn 2 XferAsset
                    int usdcid //usdc                    
                    ==
                    &&
                    gtxn 2 AssetReceiver
                    gtxn 0 Sender
                    ==
                    &&
                    bnz main_l11
                    err
                    main_l11:
                    gtxn 3 TypeEnum
                    int axfer
                    ==
                    gtxn 3 XferAsset
                    int nftid //nft                    
                    ==
                    &&
                    gtxn 3 AssetAmount
                    int 1
                    ==
                    &&
                    bnz main_l13
                    err
                    main_l13:
                    gtxn 1 TypeEnum
                    int pay
                    ==
                    gtxn 1 Sender
                    gtxn 0 Sender
                    ==
                    &&
                    bnz main_l15
                    err
                    main_l15:
                    gtxn 3 Sender
                    gtxn 0 Sender
                    ==
                    bnz main_l21
                    gtxn 3 Sender
                    gtxn 0 Sender
                    !=
                    bnz main_l18
                    int 0
                    return
                    main_l18:
                    gtxn 1 Amount
                    gtxn 2 Fee
                    gtxn 3 Fee
                    +
                    >=
                    bnz main_l20
                    err
                    main_l20:
                    int 1
                    return
                    main_l21:
                    gtxn 1 Amount
                    gtxn 2 Fee
                    >=
                    bnz main_l23
                    err
                    main_l23:
                    int 1
                    return
                    main_l24:
                    gtxn 2 TypeEnum
                    int axfer
                    ==
                    gtxn 2 XferAsset
                    int usdcid //usdc                  
                    ==
                    &&
                    gtxn 2 AssetReceiver
                    gtxn 0 Sender
                    ==
                    gtxn 2 Sender
                    gtxn 0 Sender
                    ==
                    ||
                    &&
                    global GroupSize
                    int 5
                    ==
                    &&
                    bnz main_l26
                    err
                    main_l26:
                    gtxn 3 TypeEnum
                    int axfer
                    ==
                    gtxn 3 XferAsset
                    int nftid //nft                    
                    ==
                    &&
                    gtxn 3 AssetAmount
                    int 1
                    ==
                    &&
                    bnz main_l28
                    err
                    main_l28:
                    gtxn 4 TypeEnum
                    int axfer
                    ==
                    gtxn 4 XferAsset
                    int usdcid //usdc                    
                    ==
                    &&
                    bnz main_l30
                    err
                    main_l30:
                    gtxn 1 TypeEnum
                    int pay
                    ==
                    gtxn 1 Sender
                    gtxn 0 Sender
                    ==
                    &&
                    bnz main_l32
                    err
                    main_l32:
                    gtxn 2 Sender
                    gtxn 0 Sender
                    ==
                    bnz main_l38
                    gtxn 2 AssetReceiver
                    gtxn 0 Sender
                    ==
                    bnz main_l35
                    int 0
                    return
                    main_l35:
                    gtxn 1 Amount
                    gtxn 2 Fee
                    gtxn 3 Fee
                    +
                    gtxn 4 Fee
                    +
                    >=
                    bnz main_l37
                    err
                    main_l37:
                    int 1
                    return
                    main_l38:
                    gtxn 1 Amount
                    gtxn 3 Fee
                    gtxn 4 Fee
                    +
                    >=
                    bnz main_l40
                    err
                    main_l40:
                    int 1
                    return
                    main_l41:
                    global GroupSize
                    int 3
                    ==
                    gtxn 2 TypeEnum
                    int axfer
                    ==
                    &&
                    gtxn 2 XferAsset
                    int usdcid //usdc                    
                    ==
                    &&
                    gtxn 2 AssetReceiver
                    gtxn 0 Sender
                    ==
                    &&
                    gtxn 1 TypeEnum
                    int pay
                    ==
                    &&
                    gtxn 1 Sender
                    gtxn 0 Sender
                    ==
                    &&
                    gtxn 1 Amount
                    gtxn 2 Fee
                    >=
                    &&
                    bnz main_l43
                    err
                    main_l43:
                    int 1
                    return
                    main_l44:
                    global GroupSize
                    int 3
                    ==
                    gtxn 1 TypeEnum
                    int pay
                    ==
                    &&
                    gtxn 1 Sender
                    gtxn 0 Sender
                    ==
                    &&
                    gtxn 1 Amount
                    gtxn 2 Fee
                    >=
                    &&
                    gtxn 2 TypeEnum
                    int axfer
                    ==
                    &&
                    gtxn 2 XferAsset
                    int nftid //nft                    
                    ==
                    &&
                    gtxn 2 AssetAmount
                    int 1
                    ==
                    &&
                    gtxn 2 AssetReceiver
                    gtxn 0 Sender
                    ==
                    &&
                    bnz main_l46
                    err
                    main_l46:
                    int 1
                    return        
                    `;
                    export default data;